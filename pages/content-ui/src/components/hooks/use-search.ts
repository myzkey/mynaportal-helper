import { useStorage } from '@extension/shared'
import { langStorage } from '@extension/storage'
import { searchItems } from '@src/helpers/search'
import type { SearchItem } from '@src/types'
import { useState, useEffect, useCallback, useRef, useMemo } from 'react'

type ReturnUseSearch = {
  resultsRef: React.RefObject<HTMLDivElement | null>
  searchResults: SearchItem[]
  handleSearch: (term: string) => void
  searchTerm: {
    value: string
    onChange: (value: string) => void
  }
  selectedIndex: {
    value: number
    onChange: (value: number) => void
  }
  composing: {
    value: boolean
    onChange: (value: boolean) => void
  }
}

export const useSearch = (): ReturnUseSearch => {
  const resultsRef = useRef<HTMLDivElement>(null)
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [selectedIndex, setSelectedIndex] = useState<number>(-1)
  const [isComposing, setIsComposing] = useState<boolean>(false)
  const currentLangCode = useStorage(langStorage)

  const searchResults = useMemo<SearchItem[]>(() => {
    if (searchTerm.trim() === '') return []
    return searchItems(searchTerm, currentLangCode)
  }, [currentLangCode, searchTerm])

  useEffect(() => {
    if (selectedIndex >= 0 && resultsRef.current) {
      const selectedElement = resultsRef.current.children[selectedIndex] as HTMLElement
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
      }
    }
  }, [selectedIndex])

  const handleSearch = useCallback((term: string): void => {
    setSearchTerm(term)
  }, [])

  return {
    resultsRef,
    searchResults,
    handleSearch,
    searchTerm: {
      value: searchTerm,
      onChange: (value: string) => setSearchTerm(value),
    },
    selectedIndex: {
      value: selectedIndex,
      onChange: (value: number) => setSelectedIndex(value),
    },
    composing: {
      value: isComposing,
      onChange: (value: boolean) => setIsComposing(value),
    },
  }
}
