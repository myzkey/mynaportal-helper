import { CATEGORY } from '@src/helpers/const'
import type { SearchItem } from '@src/types'

export const certificates: SearchItem[] = [
  {
    url: 'https://myna.go.jp/certificates/my-number-card',
    category: CATEGORY.OTHER,
    ja: {
      title: 'マイナンバーカード',
      description: 'マイナンバーカードの申請や更新に関する情報',
      keywords: ['マイナンバーカード', '利用者証明用電子証明書', '署名用電子証明書', '個人番号'],
    },
    en: {
      title: 'Individual Number Card',
      description: 'Information about using the Individual Number Card',
      keywords: ['My Number Portal', 'My Number Card', 'Notification Card', 'Health Insurance Card'],
    },
  },
  {
    url: 'https://myna.go.jp/svc/drivers-license',
    category: CATEGORY.DRIVER,
    ja: {
      title: '運転免許',
      description: '',
      keywords: ['運転免許', 'マイナ免許証', '更新', '取得', '免許センター'],
    },
    en: {
      title: "Driver's License",
      description: '',
      keywords: ["Driver's License", "My Number Driver's License", 'Renewal', 'Acquisition', 'License Center'],
    },
  },
  {
    url: 'https://myna.go.jp/certificates/health-insurance-card',
    category: CATEGORY.HEALTH_MEDICAL,
    ja: {
      title: '健康保険証',
      description: '健康保険証利用の申込や確認',
      keywords: ['健康保険', '保険証', '資格確認', '医療', '限度額適用認定証'],
    },
    en: {
      title: 'Health Insurance Card',
      description: 'Application and confirmation of health insurance card usage',
      keywords: [
        'Health Insurance',
        'Insurance Card',
        'Qualification Confirmation',
        'Medical',
        'Maximum Amount Certification',
      ],
    },
  },
  {
    url: 'https://myna.go.jp/family-registration',
    category: CATEGORY.RESIDENCE,
    ja: {
      title: '戸籍',
      description: '戸籍関連の手続きに関する情報',
      keywords: ['世帯', '戸籍', '住民票', '住民登録', '戸籍謄本', '戸籍抄本', '運転免許', 'パスポート', '電子証明書'],
    },
    en: {
      title: 'Family Registration',
      description: 'Information about family registration-related procedures',
      keywords: [
        'Household',
        'Family Registration',
        'Resident Registration',
        'Family Register Copy',
        'Family Register Extract',
        "Driver's License",
        'Passport',
        'Electronic Certificate',
      ],
    },
  },
  {
    url: 'https://myna.go.jp/html/passport_information.html',
    category: CATEGORY.PASSPORT,
    ja: {
      title: 'パスポート（旅券）申請について',
      description: 'オンラインでパスポートの申請ができます。パスポートは、窓口での受取りとなります。',
      keywords: ['パスポート', '申請', '更新', '取得', '海外渡航', '旅券', '紛失', '切り替え'],
    },
    en: {
      title: 'Passport',
      description: 'You can apply for a passport online. The passport must be received at the counter.',
      keywords: ['Passport', 'Application', 'Renewal', 'Acquisition', 'Overseas Travel', 'Travel Document'],
    },
  },
]
