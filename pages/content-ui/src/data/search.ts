import { CATEGORY } from '@src/helpers/const'
import type { SearchItem } from '@src/types'

export const search: SearchItem[] = [
  {
    url: 'https://myna.go.jp/search',
    category: CATEGORY.OTHER,
    ja: {
      title: 'さがす',
      description: '公式のマイナポータル内の情報を検索。',
      keywords: ['検索', 'さがす'],
    },
    en: {
      title: 'Search',
      description: 'Search for information within the official Mynaportal.',
      keywords: ['Search', 'Find'],
    },
  },
]
