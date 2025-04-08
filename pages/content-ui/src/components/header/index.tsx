import { forwardRef } from 'react'
import { SearchInput, type SearchInputProps } from './search-input'
import { EscCloseButton } from './esc-close-button'
import { SearchControlsInfo } from './search-controls-info'

type hHeaderProps = SearchInputProps & {
  onClose: () => void
}

export const Header = forwardRef<HTMLInputElement, hHeaderProps>(({ onClose, ...restProps }, ref) => {
  return (
    <div className="sticky top-0 bg-white z-10 border-b border-gray-200 shadow-sm">
      <div className="relative flex items-center">
        <div className="flex-grow">
          <SearchInput ref={ref} {...restProps} />
        </div>
        <div className="flex-shrink-0 pr-4">
          <EscCloseButton onClick={onClose} />
        </div>
      </div>

      <SearchControlsInfo />
    </div>
  )
})
