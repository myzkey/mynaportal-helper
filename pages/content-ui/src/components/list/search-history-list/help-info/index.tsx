import { useSafeTranslation } from '@src/components/hooks/use-safe-translation'

export const HelpInfo = () => {
  const { t } = useSafeTranslation()
  return (
    <div className="bg-blue-50 rounded-xl p-4">
      <h3 className="text-sm font-medium text-blue-800 mb-2">{t('使い方のヒント')}</h3>
      <p className="text-sm text-blue-700">
        {t(
          'マイナポータル内の情報を素早く検索できます。検索したい内容を入力すると、関連する手続きのページが表示されます。',
        )}
      </p>
      <div className="mt-3 text-xs text-blue-600">
        <p>• {t('キーワードを入力して検索')}</p>
        <p>• {t('矢印キーで結果を選択')}</p>
        <p>• {t('Enter キーで選択した結果のページへ移動')}</p>
      </div>
    </div>
  )
}
