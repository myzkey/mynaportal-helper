// ターミナル出力用の色コード
export const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  underscore: '\x1b[4m',
  blink: '\x1b[5m',
  reverse: '\x1b[7m',
  hidden: '\x1b[8m',

  // 前景色（文字色）
  fg: {
    black: '\x1b[30m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m',
    crimson: '\x1b[38m',
  },

  // 背景色
  bg: {
    black: '\x1b[40m',
    red: '\x1b[41m',
    green: '\x1b[42m',
    yellow: '\x1b[43m',
    blue: '\x1b[44m',
    magenta: '\x1b[45m',
    cyan: '\x1b[46m',
    white: '\x1b[47m',
    crimson: '\x1b[48m',
  },
};

// // エラーメッセージを赤色で表示
// console.error(`${colors.fg.red}URLからのテキスト抽出に失敗しました:${colors.reset}`);

// // 成功メッセージを緑色で表示
// console.log(`${colors.fg.green}処理が完了しました${colors.reset}`);

// // 警告メッセージを黄色で表示
// console.warn(`${colors.fg.yellow}警告: データが不完全かもしれません${colors.reset}`);

// // 情報メッセージを青色で表示
// console.info(`${colors.fg.blue}情報: 処理を開始します${colors.reset}`);

// // 複数のスタイルを組み合わせる（太字+赤色）
// console.error(`${colors.bright}${colors.fg.red}重大なエラーが発生しました!${colors.reset}`);
