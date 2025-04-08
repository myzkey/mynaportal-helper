import type React from 'react'
import './i18n'
import { useCallback } from 'react'
import { ResultEmpty } from './components/list/search-result-list/result-empty'
import { SearchResultList } from './components/list/search-result-list'
import { Footer } from './components/footer'
import { Header } from './components/header'
import { RootSearchButton } from './components/root-search-button'
import { Dialog } from './components/ui/dialog'
import { SearchHistoryList } from './components/list/search-history-list'
import { useSearchDialog } from './components/hooks/use-search-dialog'
import { useSearchHistory } from './components/hooks/use-search-history'
import { useSearch } from './components/hooks/use-search'
import { useKeyboardNavigation } from './components/hooks/use-keyboard-navigation'

const App: React.FC<unknown> = () => {
  const { isOpen, onClose, toggleSearchDialog, inputRef, dialogRef, searchButtonRef } = useSearchDialog()
  const { resultsRef, searchTerm, searchResults, selectedIndex, composing, handleSearch } = useSearch()

  const { historyRef, searchHistory, historySelectedIndex, onClickSearchHistory, removeFromHistory } = useSearchHistory(
    searchTerm.value,
  )

  const handleSearchResultNavigation = useKeyboardNavigation({
    isComposing: composing.value,
    items: searchResults,
    selectedIndex,
    onSelect: (result) => onClickSearchHistory(result.url),
  })

  const handleHistoryNavigation = useKeyboardNavigation({
    isComposing: composing.value,
    items: searchHistory,
    selectedIndex: historySelectedIndex,
    onSelect: (term) => handleSearch(term),
  })

  const handleKeyNavigation = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (searchTerm.value) {
        handleSearchResultNavigation(e)
      } else {
        handleHistoryNavigation(e)
      }
    },
    [searchTerm, handleSearchResultNavigation, handleHistoryNavigation],
  )

  return (
    <>
      <RootSearchButton isOpen={isOpen} onClick={toggleSearchDialog} ref={searchButtonRef} />

      <Dialog
        ref={dialogRef}
        isOpen={isOpen}
        onClose={onClose}
        Header={
          <Header
            ref={inputRef}
            searchTerm={searchTerm}
            setIsComposing={composing.onChange}
            onClose={onClose}
            onKeyDown={handleKeyNavigation}
          />
        }
        Footer={<Footer />}>
        <div>
          <div className="flex-1 overflow-auto" style={{ maxHeight: 'calc(80vh - 120px)' }}>
            {searchTerm.value && searchResults.length === 0 ? <ResultEmpty /> : null}
            {searchResults.length > 0 && (
              <SearchResultList
                results={searchResults}
                selectedIndex={selectedIndex.value}
                onItemClick={onClickSearchHistory}
                onItemHover={selectedIndex.onChange}
                ref={resultsRef}
              />
            )}
            {!searchTerm.value && (
              <SearchHistoryList
                ref={historyRef}
                searchHistory={searchHistory}
                handleSearch={handleSearch}
                historySelectedIndex={historySelectedIndex}
                removeFromHistory={removeFromHistory}
              />
            )}
          </div>
        </div>
      </Dialog>
    </>
  )
}

export default App
