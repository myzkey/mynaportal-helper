import { useState, useEffect, useCallback, useRef } from 'react'

type ReturnUseSearchDialog = {
  isOpen: boolean
  onClose: () => void
  toggleSearchDialog: () => void
  inputRef: React.RefObject<HTMLInputElement | null>
  dialogRef: React.RefObject<HTMLDivElement | null>
  searchButtonRef: React.RefObject<HTMLButtonElement | null>
}

export const useSearchDialog = (): ReturnUseSearchDialog => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const searchButtonRef = useRef<HTMLButtonElement>(null)

  const toggleSearchDialog = useCallback((): void => {
    setIsOpen((prev) => !prev)
    if (isOpen) return
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus()
      }
    }, 100)
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        toggleSearchDialog()
      } else if (e.key === 'Escape' && isOpen) {
        e.preventDefault()
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, toggleSearchDialog])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dialogRef.current &&
        searchButtonRef.current &&
        e.target instanceof Node &&
        !dialogRef.current.contains(e.target) &&
        !searchButtonRef.current.contains(e.target) &&
        !e.composedPath().some((el) => {
          if (el instanceof HTMLElement) {
            return el.tagName === 'INPUT' || el.closest('.search-modal-content') !== null
          }
          return false
        })
      ) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return {
    isOpen,
    onClose: () => setIsOpen(false),
    toggleSearchDialog,
    inputRef,
    dialogRef,
    searchButtonRef,
  }
}
