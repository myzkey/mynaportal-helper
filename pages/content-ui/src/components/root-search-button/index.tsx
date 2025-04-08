// eslint-disable-next-line import-x/no-named-as-default
import clsx from 'clsx'
import { forwardRef } from 'react'

type Props = {
  isOpen: boolean
  onClick: () => void
}

export const RootSearchButton = forwardRef<HTMLButtonElement, Props>(({ isOpen, onClick }, ref) => {
  return (
    <button
      ref={ref}
      onClick={onClick}
      className={clsx(
        'fixed right-6 bottom-6 flex items-center justify-center p-3 rounded-full shadow-lg transition-all duration-300 z-50',
        {
          'bg-blue-600 text-white scale-110': isOpen,
          'bg-blue-500 text-white hover:bg-blue-600': !isOpen,
        },
      )}
      aria-label="マイナポータル検索"
      data-tooltip="マイナポータル検索 (Ctrl+K)">
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </button>
  )
})
