import type { LanguageCode } from '@extension/storage'
import { searchData } from '@src/data'
import type { SearchItem } from '@src/types'

/**
 * Search items based on the query and language.
 * @param query
 * @param language
 * @returns
 */
export function searchItems(query: string, language: LanguageCode): SearchItem[] {
  const normalizedQuery = query.toLowerCase().trim()

  return searchData.filter((item) => {
    const langData = item[language]

    if (!langData) return false

    const titleMatch = langData.title.toLowerCase().includes(normalizedQuery)
    const descMatch = langData.description.toLowerCase().includes(normalizedQuery)
    const keywordMatch = langData.keywords.some((k) => k.toLowerCase().includes(normalizedQuery))

    const otherLangMatch = Object.keys(item)
      .filter(
        (key) => key !== language && key !== 'id' && key !== 'url' && key !== 'category' && key !== 'globalKeywords',
      )
      .some((lang) => {
        const otherLangData = item[lang as 'ja' | 'en']
        return otherLangData?.keywords.some((k) => k.toLowerCase().includes(normalizedQuery))
      })

    return titleMatch || descMatch || keywordMatch || otherLangMatch
  })
}
