import { CATEGORY } from '@src/helpers/const'
import type { SearchItem } from '@src/types'

export const work: SearchItem[] = [
  {
    url: 'https://myna.go.jp/svc/employment-insurance',
    category: CATEGORY.WORK,
    ja: {
      title: '雇用保険',
      description: '被保険者情報の確認や離職票電子交付の申請',
      keywords: ['離職票', '被保険者'],
    },
    en: {
      title: 'Employment Insurance',
      description: 'Check insured person information and apply for electronic delivery of separation slips',
      keywords: ['Separation Slip', 'Insured Person'],
    },
  },
]
