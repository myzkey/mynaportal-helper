import { CATEGORY } from '@src/helpers/const'
import type { SearchItem } from '@src/types'

export const medical: SearchItem[] = [
  {
    url: 'https://myna.go.jp/medical-expenses',
    category: CATEGORY.HEALTH_MEDICAL,
    ja: {
      title: '医療費',
      description: '医療費の申請や支払い状況の確認',
      keywords: [
        '医療費',
        '支払い',
        '申請',
        '受給',
        '診療',
        '保険者情報一覧',
        '費用',
        '窓口負担相当額',
        '窓口負担相当額',
        'その他の公費の負担額',
      ],
    },
    en: {
      title: 'Medical Expenses',
      description: 'Application and confirmation of medical expenses',
      keywords: [
        'Medical Expenses',
        'Payment',
        'Application',
        'Benefit',
        'Medical Treatment',
        'Insurer Information List',
        'Cost',
        'Out-of-Pocket Amount',
        'Out-of-Pocket Amount',
        'Other Public Burden Amount',
      ],
    },
  },
  {
    url: 'https://myna.go.jp/certificates/medical-subsidy',
    category: CATEGORY.HEALTH_MEDICAL,
    ja: {
      title: '医療受給者証',
      description: '医療受給者証の申請や確認',
      keywords: ['医療受給者証', '医療', '受給者証', '申請', '確認'],
    },
    en: {
      title: 'Medical Subsidy Certificate',
      description: 'Application and confirmation of medical subsidy certificate',
      keywords: ['Medical Subsidy Certificate', 'Medical', 'Beneficiary Certificate', 'Application', 'Confirmation'],
    },
  },
  {
    url: 'https://myna.go.jp/medicines',
    category: CATEGORY.HEALTH_MEDICAL,
    ja: {
      title: '薬',
      description: '医療機関や薬局で処方・調剤されたお薬',
      keywords: ['薬', '処方箋', '薬局', '医薬品', '調合', '医療'],
    },
    en: {
      title: 'Medicines',
      description: 'Medicines prescribed and dispensed at medical institutions and pharmacies',
      keywords: ['Medicines', 'Prescription', 'Pharmacy', 'Medical Products', 'Compounding', 'Medical'],
    },
  },
  {
    url: 'https://myna.go.jp/vaccines',
    category: CATEGORY.HEALTH_MEDICAL,
    ja: {
      title: 'ワクチン',
      description: '予防接種の予定・接種記録',
      keywords: ['ワクチン', '予防接種', '接種', '予防', '記録'],
    },
    en: {
      title: 'Vaccines',
      description: 'Vaccination schedule and vaccination records',
      keywords: ['Vaccines', 'Vaccination', 'Immunization', 'Prevention', 'Records'],
    },
  },
  {
    url: 'https://myna.go.jp/child-checkup',
    category: CATEGORY.HEALTH_MEDICAL,
    ja: {
      title: '乳幼児健診',
      description: '乳幼児の健康診査情報',
      keywords: ['子ども', '健診', '健康診査', '診査'],
    },
    en: {
      title: 'Child Checkup',
      description: 'Health checkup information for infants and toddlers',
      keywords: ['Child', 'Checkup', 'Health Checkup', 'Examination'],
    },
  },
  {
    url: 'https://myna.go.jp/prenatal-checkups',
    category: CATEGORY.HEALTH_MEDICAL,
    ja: {
      title: '妊婦健診',
      description: '妊産婦の健康診査情報',
      keywords: ['妊婦', '健診', '健康診査', '診査', '母子健康手帳'],
    },
    en: {
      title: 'Prenatal Checkup',
      description: '',
      keywords: ['Prenatal Checkup', 'Maternal and Child Health Handbook'],
    },
  },
  {
    url: 'https://myna.go.jp/medical-conditions',
    category: CATEGORY.HEALTH_MEDICAL,
    ja: {
      title: '傷病名',
      description: '医療機関が登録した病名情報',
      keywords: ['病名', '傷病名', '医療機関', '診断', '病気'],
    },
    en: {
      title: 'Medical Conditions',
      description: 'Information on diseases registered by medical institutions',
      keywords: ['Disease Name', 'Medical Condition', 'Medical Institution', 'Diagnosis', 'Disease'],
    },
  },
  {
    url: 'https://myna.go.jp/allergies-and-intolerances',
    category: CATEGORY.HEALTH_MEDICAL,
    ja: {
      title: 'アレルギー等',
      description: '医療機関が登録したお薬や食物アレルギー等の情報',
      keywords: ['アレルギー', '食物アレルギー', 'アレルギー情報'],
    },
    en: {
      title: 'Allergies and Intolerances',
      description: 'Information on medicines and food allergies registered by medical institutions',
      keywords: ['Allergies', 'Food Allergies', 'Allergy Information'],
    },
  },
  {
    url: 'https://myna.go.jp/infection-lab-results',
    category: CATEGORY.HEALTH_MEDICAL,
    ja: {
      title: '感染症',
      description: '医療機関が登録した感染症の検査結果',
      keywords: ['感染症', '検査結果', '検査', '感染', 'ウイルス', '細菌'],
    },
    en: {
      title: 'Infectious Diseases',
      description: 'Test results of infectious diseases registered by medical institutions',
      keywords: ['Infectious Diseases', 'Test Results', 'Testing', 'Infection', 'Virus', 'Bacteria'],
    },
  },
  {
    url: 'https://myna.go.jp/medical-lab-results',
    category: CATEGORY.HEALTH_MEDICAL,
    ja: {
      title: '検査結果',
      description: '医療機関が登録した血液や尿などの検査結果',
      keywords: ['検査結果', '検査', '血液', '尿', '検体'],
    },
    en: {
      title: 'Test Results',
      description: 'Test results of blood, urine, etc. registered by medical institutions',
      keywords: ['Test Results', 'Testing', 'Blood', 'Urine', 'Specimen'],
    },
  },
  {
    url: 'https://myna.go.jp/patient-referral-prescriptions',
    category: CATEGORY.HEALTH_MEDICAL,
    ja: {
      title: '紹介状等に記載された処方情報',
      description: '医療機関が診療情報提供書（紹介状）等に記載する、主に医療機関で相互に共有される処方情報',
      keywords: ['紹介状', '処方情報', '診療情報提供書', '処方箋', '医療機関'],
    },
    en: {
      title: 'Prescription Information Recorded in Referral Letters',
      description:
        'Prescription information recorded in referral letters (medical information provision letters) mainly shared between medical institutions',
      keywords: [
        'Referral Letter',
        'Prescription Information',
        'Medical Information Provision Letter',
        'Prescription',
        'Medical Institution',
      ],
    },
  },
]
