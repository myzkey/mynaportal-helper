import type { Category } from '@src/types'

export const categories: Category[] = [
  'カード',
  '健康',
  '医療',
  '運転',
  'パスポート',
  'その他',
  '戸籍',
  'お金',
  '仕事',
  '設定',
  'よくある質問',
] as const

export const CATEGORY = {
  CARD: 'card',
  HEALTH_MEDICAL: 'health and medical',
  DRIVER: 'driver',
  PASSPORT: 'passport',
  OTHER: 'other',
  RESIDENCE: 'residence',
  MONEY: 'money',
  WORK: 'work',
  SETTING: 'setting',
  FAQ: 'faq',
}
