import type React from 'react'
import { CategoryIcon } from '@src/components/ui/category-icon'
import type { SearchItem } from '@src/types'
import { langStorage } from '@extension/storage'
import { useStorage } from '@extension/shared'

type Props = {
  item: SearchItem
  isSelected: boolean
  onClick: () => void
  onMouseEnter: () => void
}

export const SearchResultItem: React.FC<Props> = ({ item, isSelected, onClick, onMouseEnter }) => {
  const lang = useStorage(langStorage)

  const getCategoryColor = (category: string): string => {
    switch (category) {
      case '申請':
        return '#10b981'
      case '確認':
        return '#f59e0b'
      case '手続き':
        return '#8b5cf6'
      default:
        return '#3b82f6'
    }
  }

  return (
    <button
      className={`w-full px-5 py-4 text-left transition-colors ${isSelected ? 'bg-blue-50' : 'hover:bg-gray-50'}`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}>
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white"
            style={{
              backgroundColor: getCategoryColor(item.category),
            }}>
            <CategoryIcon category={item.category} />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-base font-medium text-gray-900 truncate">{item[lang].title}</p>
          <p className="text-sm text-gray-500 mt-1 line-clamp-2">{item[lang].description}</p>
        </div>
        <div className="flex-shrink-0">
          <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </button>
  )
}
