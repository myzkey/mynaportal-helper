import type { SearchItem } from '@src/types'
import { notification } from './notification'
import { money } from './money'
import { residence } from './residence'
import { medical } from './medical'
import { certificates } from './certificates'
import { work } from './work'
import { help } from './help'
import { settings } from './settings'
import { agent } from './agent'
import { search } from './search'

// TODO: データの管理の仕方は要検討
// いったんデータをここにまとめてる
export const searchData: SearchItem[] = [
  // 代理人
  ...agent,
  // 証明書
  ...certificates,
  // ヘルプ
  ...help,
  // 医療
  ...medical,
  // お金
  ...money,
  // 通知
  ...notification,
  // 住まい
  ...residence,
  // 探す
  ...search,
  // 設定
  ...settings,
  // 仕事
  ...work,
]
