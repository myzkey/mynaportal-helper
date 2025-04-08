import { extractPageMetadata } from './openai'
import { extractTextFromUrl } from './request'
import fs from 'fs'
import path from 'path'
import { urls } from './urls'

type SearchItem = {
  title: string
  description: string
  url: string
  keywords: string[]
  category: string
}

/**
 * URLを順次処理する関数
 * @param urls 処理対象のURL配列
 * @param outputDir 出力ディレクトリ
 */
async function processUrls(urls: string[], outputDir: string): Promise<SearchItem[]> {
  const result: SearchItem[] = []
  const failedUrls: string[] = []

  // URLを1つずつ順番に処理
  for (const url of urls) {
    try {
      console.log(`\n処理開始: ${url}`)

      // テキストを抽出
      const { text, title } = await extractTextFromUrl(url)
      console.log(`テキスト取得完了 (${text.length} 文字)`)
      if (text.length === 0) continue

      // メタデータを抽出
      console.log('OpenAPIでメタデータ抽出中...')
      const metadata = await extractPageMetadata(title, text, url)
      console.log('OpenAPIでメタデータ抽出完了')
      if (!metadata) continue

      const item: SearchItem = {
        title: metadata.title,
        description: metadata.description,
        url,
        keywords: metadata.keywords,
        category: metadata.category,
      }

      result.push(item)
      console.log(`URL処理完了: ${url}`)
      console.log(`現在 ${result.length}/${urls.length} 件処理済み`)
    } catch (error) {
      failedUrls.push(url)
      console.error(`${url} の処理中にエラーが発生しました:`)
      // エラーが発生しても処理を続行
    }
  }
  console.log(`\n処理完了: 成功 ${result.length} 件 / 失敗 ${failedUrls.length} 件`)
  return result
}

/**
 * メイン処理：URLからテキストを抽出し、キーワードを取得する
 * @param urls 処理対象のURL配列
 * @param outputDir 出力ディレクトリ
 */
async function main(urls: string[], outputDir: string): Promise<{ result: SearchItem[] }> {
  console.log(`合計 ${urls.length} 件のURLを処理します`)

  // URLを順次処理
  const result = await processUrls(urls, outputDir)

  // 出力ディレクトリが存在しない場合は作成
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  // 結果をJSONファイルに保存
  const fileName = `search_items_${Date.now()}.json`
  const filePath = path.join(outputDir, fileName)

  fs.writeFileSync(filePath, JSON.stringify(result, null, 2), 'utf8')
  console.log(`\n結果を保存しました: ${filePath}`)

  // コンソールにも出力
  console.log('\n===== 生成されたSearchItemデータ =====\n')
  console.log(JSON.stringify(result, null, 2))
  console.log('\n=====================================\n')

  return { result }
}

// コマンドライン引数の処理
const params = process.argv[2]
const outputDir = process.argv[3] || './output'

if (!params) {
  console.error('エラー: パラメータが指定されていません')
  console.error('使用方法: node dist/index.js <URL | all> [出力ディレクトリ]')
  process.exit(1)
}

// 'all'パラメータか個別URLかを判定
const targetUrls = params === 'all' ? urls : [params]

main(targetUrls, outputDir)
  .then((result) => {
    console.log('処理が完了しました')
    console.log(`合計 ${result.result.length} 件のデータを生成しました`)
  })
  .catch((error) => {
    console.error('実行中にエラーが発生しました:', error)
    process.exit(1)
  })
