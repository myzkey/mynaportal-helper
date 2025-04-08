import { LanguageMenu } from '@src/components/header/language-selector'
import { useSafeTranslation } from '@src/components/hooks/use-safe-translation'
import type React from 'react'

export const SearchControlsInfo: React.FC<unknown> = () => {
  const { t } = useSafeTranslation()
  return (
    <div className="px-5 py-2 bg-gray-50 text-xs text-gray-500 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <kbd className="px-1.5 py-0.5 rounded bg-white border border-gray-300 shadow-sm text-gray-500">↑</kbd>
          <kbd className="px-1.5 py-0.5 rounded bg-white border border-gray-300 shadow-sm text-gray-500">↓</kbd>
          <span>{t('選択')}</span>
        </div>
        <div className="flex items-center gap-1">
          <kbd className="px-1.5 py-0.5 rounded bg-white border border-gray-300 shadow-sm text-gray-500">Enter</kbd>
          <span>{t('遷移')}</span>
        </div>
        <div className="flex items-center gap-1">
          <kbd className="px-1.5 py-0.5 rounded bg-white border border-gray-300 shadow-sm text-gray-500">Esc</kbd>
          <span>{t('閉じる')}</span>
        </div>
      </div>
      <div className="mr-4">
        <LanguageMenu />
      </div>
    </div>
  )
}
