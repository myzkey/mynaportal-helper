// eslint-disable-next-line import-x/no-named-as-default
import clsx from 'clsx'
import { forwardRef } from 'react'

type Props = {
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void
  Header: React.ReactNode
  Footer: React.ReactNode
}
export const Dialog = forwardRef<HTMLDivElement, Props>(({ children, isOpen, onClose, Header, Footer }, ref) => {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-start pt-16 justify-center p-4 transition-opacity duration-300 search-modal-overlay z-[10000]"
      style={{ opacity: isOpen ? 1 : 0 }}
      onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div
        ref={ref}
        className={clsx(
          'w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 transform search-modal-content flex flex-col max-h-[80vh]',
          { 'opacity-0': !isOpen },
          { 'opacity-100': isOpen },
          { 'translate-y-0 scale-100': isOpen },
          { 'translate-y-4 scale-95': !isOpen },
        )}>
        {Header}
        {children}
        {Footer}
      </div>
    </div>
  )
})
