import { useStorage } from '@extension/shared'
import { searchHistoryStorage } from '@extension/storage'
import { useState, useEffect, useCallback, useRef } from 'react'

type ReturnUseSearchHistory = {
  historyRef: React.RefObject<HTMLDivElement | null>
  searchHistory: string[]
  historySelectedIndex: {
    value: number
    onChange: (value: number) => void
  }
  onClickSearchHistory: (url: string) => Promise<void>
  removeFromHistory: (term: string) => Promise<void>
}

export const useSearchHistory = (searchTerm: string): ReturnUseSearchHistory => {
  const historyRef = useRef<HTMLDivElement>(null)
  const [historySelectedIndex, setHistorySelectedIndex] = useState<number>(-1)
  const searchHistory = useStorage(searchHistoryStorage)

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setHistorySelectedIndex(-1)
    }
  }, [searchTerm])

  const addToHistory = useCallback(async (term: string) => {
    if (term.trim() !== '') {
      await searchHistoryStorage.addItem(term)
    }
  }, [])

  const removeFromHistory = useCallback(async (term: string) => {
    await searchHistoryStorage.removeItem(term)
  }, [])

  const onClickSearchHistory = useCallback(
    async (url: string): Promise<void> => {
      if (searchTerm.trim() !== '') await addToHistory(searchTerm)
      window.location.href = url
    },
    [searchTerm, addToHistory],
  )

  return {
    historyRef,
    searchHistory,
    historySelectedIndex: {
      value: historySelectedIndex,
      onChange: (value: number) => setHistorySelectedIndex(value),
    },
    onClickSearchHistory,
    removeFromHistory,
  }
}
