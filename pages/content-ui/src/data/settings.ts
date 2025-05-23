import { CATEGORY } from '@src/helpers/const'
import type { SearchItem } from '@src/types'

export const settings: SearchItem[] = [
  {
    url: 'https://myna.go.jp/login/pc',
    category: CATEGORY.SETTING,
    ja: {
      title: 'ログイン',
      description: 'マイナポータルにログインするための情報を設定します。',
      keywords: ['ログイン', 'パスワード', 'ID', 'メールアドレス'],
    },
    en: {
      title: 'Login',
      description: 'Set up information to log in to mynaportal.',
      keywords: ['Login', 'Password', 'ID', 'Email Address'],
    },
  },
  {
    url: 'https://myna.go.jp/settings/notification',
    category: CATEGORY.SETTING,
    ja: {
      title: 'メール通知',
      description: 'メール通知を設定すると、マイナポータルからのお知らせをメールで受け取ることができます。',
      keywords: ['メールアドレス', 'email', 'お知らせ', '通知'],
    },
    en: {
      title: 'Email Notification',
      description: 'By setting up email notifications, you can receive notifications from mynaportal via email.',
      keywords: ['Email Address', 'email', 'Notification'],
    },
  },
  {
    url: 'https://myna.go.jp/SCK1801_01_001/SCK1801_01_001_Reload.form',
    category: CATEGORY.SETTING,
    ja: {
      title: '申請入力補助情報の登録変更',
      description: '申請入力補助情報を登録すると、電子申請で自動入力できます。登録は任意です。',
      keywords: ['申請入力補助情報', '申請用プロフィール', '登録', '変更'],
    },
    en: {
      title: 'Application Input Assistance Information Registration Change',
      description:
        'By registering application input assistance information, you can automatically input it in electronic applications. Registration is optional.',
      keywords: ['Application Input Assistance Information', 'Application Profile', 'Registration', 'Change'],
    },
  },
  {
    url: 'https://myna.go.jp/settings/connection',
    category: CATEGORY.SETTING,
    ja: {
      title: '外部サイトとの連携',
      description: 'マイナポータルと連携可能な外部サイトの連携状況の一覧です。',
      keywords: [
        '外部サイトとの連携',
        'ねんきんネット',
        '日本年金機構',
        'マイナ免許証',
        '警察庁',
        '国税庁',
        'e-Tax',
        '公売電子入札',
        '雇用保険',
        '離職票',
        '求職者',
        'ハローワーク',
        'マイジョブ',
        '電波利用電子申請',
        '伝搬障害防止区域図縦覧',
        'e-私書箱',
        '民間送達',
        'MyPost',
        '日本郵便',
        '確定申告',
        '年末調整',
      ],
    },
    en: {
      title: 'Linkage with External Sites',
      description: 'This is a list of the linkage status of external sites that can be linked with mynaportal.',
      keywords: [
        'Linkage with External Sites',
        'Pension Net',
        'Japan Pension Service',
        'My Number License',
        'National Police Agency',
        'National Tax Agency',
        'e-Tax',
        'Public Sale Electronic Bidding',
        'Employment Insurance',
        'Separation Notice',
        'Job Seeker',
        'Hello Work',
        'My Job',
        'Radio Wave Utilization Electronic Application',
        'Propagation Obstruction Prevention Area Map Inspection',
        'e-Private Mailbox',
        'Private Delivery',
        'My Post',
        'Japan Post',
        'Final Tax Return',
        'Year-End Adjustment',
      ],
    },
  },
  {
    url: 'https://myna.go.jp/settings/connection',
    category: CATEGORY.SETTING,
    ja: {
      title: '利用者登録の削除',
      description: '利用者登録の削除',
      keywords: ['利用者登録の削除'],
    },
    en: {
      title: 'Delete User Registration',
      description: 'Delete User Registration',
      keywords: ['Delete User Registration'],
    },
  },
]
