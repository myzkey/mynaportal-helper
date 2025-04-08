import type React from 'react'
import { useLanguage } from '@src/components/hooks/use-language'
import type { LanguageCode } from '@extension/storage'
import { useState, useRef, useEffect, useCallback } from 'react'

/**
 * 言語メニューのドロップダウンコンポーネント
 */
export const LanguageMenu: React.FC = () => {
  const { currentLanguage, changeLanguage, languageOptions } = useLanguage()
  const languages = languageOptions
  const [isOpen, setIsOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => setIsOpen(!isOpen)

  const handleLanguageChange = useCallback(
    async (lang: LanguageCode) => {
      await changeLanguage(lang)
      setIsOpen(false)
    },
    [changeLanguage],
  )

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node) &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(true)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-100 flex items-center"
        onClick={toggleMenu}
        aria-haspopup="true"
        aria-expanded={isOpen}>
        <span className="mr-2">{currentLanguage.flag}</span>
        <span>{currentLanguage.nativeName}</span>
        <svg
          className="w-4 h-4 ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div
          ref={menuRef}
          className="absolute mt-1 w-32 max-h-60 overflow-y-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10"
          role="menu"
          aria-orientation="vertical">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                onClick={() => handleLanguageChange(lang.code)}
                role="menuitem">
                <span className="mr-2">{lang.flag}</span>
                <span>{lang.nativeName}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
