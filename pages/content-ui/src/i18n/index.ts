// eslint-disable-next-line import-x/no-named-as-default
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import type { Resource } from 'i18next'
import enTranslation from './locales/en.json'
import jaTranslation from './locales/ja.json'
import type { LanguageCode } from '@extension/storage'
import { langStorage } from '@extension/storage'

export type LocalesJSONType = typeof jaTranslation

const resources: Resource = {
  en: { translation: enTranslation },
  ja: { translation: jaTranslation },
}

// 現在の言語を取得する関数
const getCurrentLanguage = async () => {
  try {
    return await langStorage.get()
  } catch {
    return 'en'
  }
}

const initI18n = async () => {
  const currentLang = await getCurrentLanguage()

  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      debug: true,
      resources,
      lng: currentLang,
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false,
      },
      detection: {
        order: ['localStorage', 'navigator'],
        caches: ['localStorage'],
      },
    })
}

initI18n()

i18n.on('languageChanged', (lng) => {
  if (isValidLanguage(lng)) {
    langStorage.onChange(lng as LanguageCode).catch(console.error)
  } else {
    console.error(`Unsupported language: ${lng}`)
    langStorage.onChange('en').catch(console.error)
  }
})

// 有効な言語コードかどうかをチェックする関数
function isValidLanguage(lng: string): boolean {
  return Object.keys(resources).includes(lng)
}

export default i18n
