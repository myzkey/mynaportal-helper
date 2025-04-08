import { useCallback, useMemo } from 'react'
import { useStorage } from '@extension/shared' // プロジェクトの実際のimportパスに調整
import type { LanguageCode, LanguageOption } from '@extension/storage'
import { langStorage, languageOptions } from '@extension/storage'
import i18n from '@src/i18n'

type ReturnUseLanguage = {
  currentLangCode: LanguageCode
  currentLanguage: LanguageOption
  changeLanguage: (lang: LanguageCode) => Promise<void>
  languageOptions: LanguageOption[]
}

/**
 * 言語設定を管理するカスタムフック
 * @returns {Object} 言語設定に関する情報と操作を提供するオブジェクト
 */
export const useLanguage = (): ReturnUseLanguage => {
  const currentLangCode = useStorage(langStorage)

  const currentLanguage = useMemo(() => {
    return languageOptions.find((lang) => lang.code === currentLangCode) || languageOptions[0]
  }, [currentLangCode])

  const changeLanguage = useCallback(async (lang: LanguageCode) => {
    i18n.changeLanguage(lang)
  }, [])

  return {
    currentLangCode,
    currentLanguage,
    changeLanguage,
    languageOptions,
  }
}
