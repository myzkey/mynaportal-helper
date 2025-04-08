import { useSafeTranslation } from '../hooks/use-safe-translation'

export const Footer = () => {
  const { t } = useSafeTranslation()
  return (
    <div className="sticky bottom-0 px-5 py-3 bg-gray-50 text-xs text-gray-500 flex items-center justify-between border-t border-gray-200">
      <div>{t('マイナポータルヘルパー')}</div>
      <div className="flex items-center gap-2">
        <a href="https://forms.gle/3y8L35usN5gpYWSX7" className="text-blue-600 hover:text-blue-800 transition-colors">
          {t('フィードバック')}
        </a>
      </div>
    </div>
  )
}
