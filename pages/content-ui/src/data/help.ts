import { CATEGORY } from '@src/helpers/const'
import type { SearchItem } from '@src/types'

export const help: SearchItem[] = [
  {
    url: 'https://faq.myna.go.jp/?site_domain=default',
    category: CATEGORY.FAQ,
    ja: {
      title: 'よくあるご質問',
      description: '被保険者情報の確認や離職票電子交付の申請',
      keywords: [],
    },
    en: {
      title: 'Frequently Asked Questions',
      description: 'Check insured person information and apply for electronic delivery of separation notice',
      keywords: [],
    },
  },
  {
    url: 'https://services.digital.go.jp/mynaportal/help/',
    category: CATEGORY.FAQ,
    ja: {
      title: '利用ガイド',
      description: '利用ガイド',
      keywords: ['利用ガイド', '使い方'],
    },
    en: {
      title: 'User Guide',
      description: 'User Guide',
      keywords: ['User Guide', 'How to use'],
    },
  },
  {
    url: 'https://myna.go.jp/SCK0701_01_001/SCK0701_01_001_Init.form',
    category: CATEGORY.FAQ,
    ja: {
      title: 'お問い合わせ',
      description: 'お問い合わせ結果を確認する',
      keywords: ['お問い合わせ結果'],
    },
    en: {
      title: 'Contact Us',
      description: 'Check the results of your inquiry',
      keywords: ['Inquiry Results'],
    },
  },
]
