import { forwardRef } from 'react'
import { Icon } from '@src/components/ui/icon'
import { HelpInfo } from './help-info'

type Props = {
  searchHistory: string[]
  handleSearch: (term: string) => void
  historySelectedIndex: {
    value: number
    onChange: (value: number) => void
  }
  removeFromHistory: (index: string) => void
}

export const SearchHistoryList = forwardRef<HTMLDivElement, Props>((props, ref) => {
  return (
    <div className="p-2">
      {props.searchHistory.length > 0 && (
        <div className="mb-6">
          <div className="space-y-1" ref={ref}>
            {props.searchHistory.map((term, index) => (
              <div
                key={index}
                className={`w-full flex items-center p-2 rounded-lg transition-colors ${
                  props.historySelectedIndex.value === index ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-50'
                }`}
                onMouseEnter={() => props.historySelectedIndex.onChange(index)}>
                <button className="flex-grow flex items-center text-left" onClick={() => props.handleSearch(term)}>
                  <Icon name="clock" className="mr-2" />
                  <span className="text-gray-700">{term}</span>
                </button>
                <button
                  className="ml-auto p-1 text-gray-400 hover:text-gray-600 rounded-full"
                  onClick={(e) => {
                    e.stopPropagation()
                    props.removeFromHistory(term)
                  }}
                  aria-label="削除">
                  <Icon name="x" className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <HelpInfo />
    </div>
  )
})
