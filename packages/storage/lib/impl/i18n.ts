import type { BaseStorage } from '../base/index.js'
import { createStorage, StorageEnum } from '../base/index.js'

// languageOptions.ts - 言語オプションを定義
export type LanguageCode = 'ja' | 'en'

export interface LanguageOption {
  code: LanguageCode
  name: string
  nativeName: string
  flag?: string
}

// サポートする言語一覧
export const languageOptions: LanguageOption[] = [
  { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  // { code: 'zh', name: 'Chinese', nativeName: '中文', flag: '🇨🇳' },
  // { code: 'ko', name: 'Korean', nativeName: '한국어', flag: '🇰🇷' },
  // { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  // { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  // { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  // { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹' },
  // { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇵🇹' },
  // { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺' },
]

type LanguageStorage = BaseStorage<LanguageCode> & {
  onChange: (lang: LanguageCode) => Promise<void>
}

// ブラウザのデフォルト言語を取得する関数
const getDefaultLanguage = (): LanguageCode => {
  if (typeof navigator === 'undefined') return 'ja'

  const browserLang = navigator.language.split('-')[0]

  const supportedLanguages: LanguageCode[] = languageOptions.map((lang) => lang.code)

  return supportedLanguages.includes(browserLang as LanguageCode) ? (browserLang as LanguageCode) : 'ja'
}

// ストレージの作成（デフォルト言語はブラウザ設定に基づく）
const storage = createStorage<LanguageCode>('lang', getDefaultLanguage(), {
  storageEnum: StorageEnum.Local,
  liveUpdate: true,
})

export const langStorage: LanguageStorage = {
  ...storage,
  onChange: async (lang: LanguageCode) => {
    console.log(`Language changed: ${lang}`)
    await storage.set(lang)
  },
}
