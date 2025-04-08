// 型定義ファイルでこうする
import type ja from '../i18n/locales/ja.json'

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation'
    resources: {
      translation: ja
    }
  }
}
