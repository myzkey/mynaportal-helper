import type { BaseStorage } from '../base/index.js'
import { createStorage, StorageEnum } from '../base/index.js'

type SearchHistory = string[]

const MAX_HISTORY_ITEMS = 5

/**
 * 検索履歴のストレージ
 */
type SearchHistoryStorage = BaseStorage<SearchHistory> & {
  /**
   * 履歴にアイテムを追加
   * @param term 検索語
   * @returns
   */
  addItem: (term: string) => Promise<void>
  /**
   * 特定の履歴項目を削除
   * @param term 検索語
   * @returns
   */
  removeItem: (term: string) => Promise<void>
  /**
   * 履歴をクリア
   * @returns
   */
  clearHistory: () => Promise<void>
}

const storage = createStorage<SearchHistory>('search-history', [], {
  storageEnum: StorageEnum.Local,
  liveUpdate: true,
})

export const searchHistoryStorage: SearchHistoryStorage = {
  ...storage,
  addItem: async (term: string) => {
    if (!term.trim()) return
    await storage.set((currentHistory) => {
      const filteredHistory = currentHistory.filter((item) => item !== term)
      const updatedHistory = [term, ...filteredHistory]
      return updatedHistory.slice(0, MAX_HISTORY_ITEMS)
    })
  },
  removeItem: async (term: string) => {
    await storage.set((currentHistory) => {
      return currentHistory.filter((item) => item !== term)
    })
  },
  clearHistory: async () => {
    await storage.set([])
  },
}
