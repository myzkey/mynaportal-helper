import { useCallback } from 'react'

/**
 * キーボードナビゲーションのオプション
 * @template T - アイテムの型
 */
type NavigationOptions<T> = {
  isComposing: boolean
  items: T[]
  selectedIndex: {
    value: number
    onChange: (value: number) => void
  }
  onSelect: (item: T) => void
}

/**
 * キーボードナビゲーションを処理するカスタムフック
 */
export function useKeyboardNavigation<T>({ isComposing, items, selectedIndex, onSelect }: NavigationOptions<T>) {
  return useCallback(
    (e: React.KeyboardEvent) => {
      if (isComposing) return
      if (items.length === 0) return

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault()
          selectedIndex.onChange(selectedIndex.value < items.length - 1 ? selectedIndex.value + 1 : 0)
          break

        case 'ArrowUp':
          e.preventDefault()
          selectedIndex.onChange(selectedIndex.value > 0 ? selectedIndex.value - 1 : items.length - 1)
          break

        case 'Enter':
          e.preventDefault()
          if (selectedIndex.value >= 0 && selectedIndex.value < items.length) {
            onSelect(items[selectedIndex.value])
          }
          break
      }
    },
    [isComposing, items, selectedIndex, onSelect],
  )
}
