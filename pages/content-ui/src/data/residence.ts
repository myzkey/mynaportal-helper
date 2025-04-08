import { CATEGORY } from '@src/helpers/const'
import type { SearchItem } from '@src/types'

export const residence: SearchItem[] = [
  {
    url: 'https://myna.go.jp/SCK2501_01_001/SCK2501_01_001_Reload.form',
    category: CATEGORY.RESIDENCE,
    ja: {
      title: '引越し',
      description: 'マイナンバーカードを使用して、引越しの手続をします。',
      keywords: [
        '引越し',
        '住所変更',
        '住民票',
        '住民登録',
        '戸籍謄本',
        '戸籍抄本',
        '運転免許',
        'パスポート',
        '転出届',
        '転居届',
      ],
    },
    en: {
      title: 'Moving procedure',
      description: 'Use your Individual Number Card to complete the moving procedure.',
      keywords: [
        'Moving',
        'Address Change',
        'Resident Registration',
        'Family Register Copy',
        "Driver's License",
        'Passport',
        'Transfer Notification',
        'Change of Address Notification',
      ],
    },
  },
]
