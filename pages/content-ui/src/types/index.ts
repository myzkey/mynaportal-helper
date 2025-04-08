// TODO: データの持ち方については別途検討する
export type SearchItem = {
  url: string
  category: string
  ja: {
    title: string
    description: string
    keywords: string[]
  }
  en: {
    title: string
    description: string
    keywords: string[]
  }
}

export type Category =
  | 'カード'
  | '健康'
  | '医療'
  | '運転'
  | 'パスポート'
  | 'その他'
  | '戸籍'
  | 'お金'
  | '仕事'
  | '設定'
  | 'よくある質問'
