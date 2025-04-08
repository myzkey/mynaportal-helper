import { forwardRef } from 'react'
import { Icon } from '@src/components/ui/icon'
import { useTranslation } from 'react-i18next'

export type SearchInputProps = {
  searchTerm: {
    value: string
    onChange: (value: string) => void
  }
  setIsComposing: (isComposing: boolean) => void
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>
}

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ searchTerm, setIsComposing, onKeyDown }, ref) => {
    const { t } = useTranslation()

    return (
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-blue-500">
          <Icon name="search" className="w-5 h-5" />
        </div>
        <input
          ref={ref}
          type="text"
          placeholder={t('マイナポータル内を検索...')}
          className="w-full py-5 pl-14 pr-24 text-lg bg-white outline-none transition-all"
          value={searchTerm.value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => searchTerm.onChange(e.target.value)}
          onCompositionStart={() => setIsComposing(true)}
          onCompositionEnd={() => setIsComposing(false)}
          onKeyDown={onKeyDown}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-4">
          <div className="flex items-center gap-2">
            {searchTerm && (
              <button
                onClick={() => searchTerm.onChange('')}
                className="group p-2 rounded-full hover:bg-gray-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
                aria-label="検索をクリア"
                title="検索をクリア">
                <Icon name="x" />
              </button>
            )}
          </div>
        </div>
      </div>
    )
  },
)
