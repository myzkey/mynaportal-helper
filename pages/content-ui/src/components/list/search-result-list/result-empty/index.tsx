import { useSafeTranslation } from '@src/components/hooks/use-safe-translation'

export const ResultEmpty = () => {
  const { t } = useSafeTranslation()
  return (
    <div className="py-12 px-6 text-center">
      <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
        <svg className="w-7 h-7 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <p className="text-gray-800 font-medium text-lg">{t('検索結果がありません')}</p>
      <p className="text-sm text-gray-500 mt-2">{t('キーワードを変えて試してみてください')}</p>
    </div>
  )
}
