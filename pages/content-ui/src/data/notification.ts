import { CATEGORY } from '@src/helpers/const'
import type { SearchItem } from '@src/types'

export const notification: SearchItem[] = [
  {
    url: 'https://myna.go.jp/messages',
    category: CATEGORY.OTHER,
    ja: {
      title: 'お知らせ',
      description: 'マイナポータルの最新情報',
      keywords: ['お知らせ', '更新情報', '障害情報', 'メンテナンス情報'],
    },
    en: {
      title: 'Notifications',
      description: 'Latest information on Mynaortal',
      keywords: ['Notifications', 'Update Information', 'Failure Information', 'Maintenance Information'],
    },
  },

  {
    url: 'https://myna.go.jp/html/info/index.html',
    category: CATEGORY.OTHER,
    ja: {
      title: 'メンテナンス・重要なお知らせ',
      description: 'マイナポータルからのメンテナンス・重要なお知らせを掲載しています。',
      keywords: ['メンテナンス', 'お知らせ'],
    },
    en: {
      title: 'Maintenance and Important Notices',
      description: 'We will post maintenance and important notices from My Number Portal.',
      keywords: ['Maintenance', 'Notice'],
    },
  },
  {
    url: 'https://myna.go.jp/menu',
    category: CATEGORY.OTHER,
    ja: {
      title: 'メニュー',
      description: '',
      keywords: [
        '言語',
        'メール通知',
        '申請用プロフィール',
        '削除',
        '代理人',
        '利用規約',
        '個人情報保護',
        '動作環境',
        'セキュリティ',
      ],
    },
    en: {
      title: 'Menu',
      description: '',
      keywords: [
        'Language',
        'Email Notification',
        'Application Profile',
        'Delete',
        'Agent',
        'Terms of Use',
        'Privacy Protection',
        'Operating Environment',
        'Security',
      ],
    },
  },
]
