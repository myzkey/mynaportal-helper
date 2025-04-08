import { forwardRef } from 'react'
import { SearchResultItem } from './search-result-item'
import type { SearchItem } from '@src/types'

type Props = {
  results: SearchItem[]
  selectedIndex: number
  onItemClick: (url: string) => void
  onItemHover: (index: number) => void
}

/**
 * 検索結果一覧
 */
export const SearchResultList = forwardRef<HTMLDivElement, Props>(
  ({ results, selectedIndex, onItemClick, onItemHover }, ref) => {
    return (
      <div ref={ref} className="divide-y divide-gray-100">
        {results.map((item, index) => (
          <SearchResultItem
            key={index}
            item={item}
            isSelected={selectedIndex === index}
            onClick={() => onItemClick(item.url)}
            onMouseEnter={() => onItemHover(index)}
          />
        ))}
      </div>
    )
  },
)
