import axios from 'axios';
import * as cheerio from 'cheerio';
import { colors } from './console-color';

/**
 * 抽出結果の型定義
 */
export interface ExtractionResult {
  title: string;
  text: string;
}

/**
 * 指定したURLからタイトルとテキストコンテンツを抽出する関数
 * @param url スクレイピング対象のURL
 * @returns タイトルとテキストを含むオブジェクト
 */
export async function extractTextFromUrl(url: string): Promise<ExtractionResult> {
  try {
    const response = await axios.get(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
      },
    });

    const html = response.data;
    const $ = cheerio.load(html);

    // タイトルを取得
    const pageTitle = $('title').text().trim() || $('h1').first().text().trim() || '';

    // 不要な要素を削除
    $('script, style, noscript, iframe, svg, nav').remove();

    // テキストを抽出
    const bodyText = $('body').text();
    const cleanedText = bodyText.replace(/\s+/g, ' ').replace(/\n+/g, ' ').trim();

    console.log(`${colors.fg.green}テキストとタイトルの抽出に成功しました${colors.reset}`);

    return {
      title: pageTitle,
      text: cleanedText,
    };
  } catch (error: any) {
    console.error(`${colors.fg.red}URLからのテキスト抽出に失敗しました。error code:${error.code}${colors.reset}`);
    return {
      title: '',
      text: '',
    };
  }
}
