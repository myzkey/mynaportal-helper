import OpenAI from 'openai';
import dotenv from 'dotenv';

// 環境変数を.envファイルから読み込む
dotenv.config();

interface PageMetadata {
  title: string;
  description: string;
  keywords: string[];
  category: string;
}

/**
 * OpenAI APIを使用してページ全体のメタデータを抽出する関数
 * @param text ページのテキストコンテンツ
 * @param url ページのURL
 * @returns タイトル、説明文、キーワード、カテゴリを含むメタデータ
 */
export async function extractPageMetadata(title: string, text: string, url: string): Promise<PageMetadata | null> {
  try {
    if (!text) return null;

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      console.error('OPENAI_API_KEY環境変数が設定されていません');
      throw new Error('APIキーが設定されていません');
    }

    const openai = new OpenAI({
      apiKey: apiKey,
    });

    // テキストが長すぎる場合は切り詰める
    const truncatedText = text.length > 4000 ? text.substring(0, 4000) : text;

    // マイナポータルの主要カテゴリのリスト
    const categories = [
      '戸籍',
      '税金',
      '年金',
      '保険',
      '福祉',
      '子育て',
      '介護',
      '医療',
      '雇用',
      '教育',
      '災害',
      '証明書',
      '住まい',
      '引越し',
      'その他',
    ];

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content:
            'あなたはマイナポータルのユーザー体験向上を専門とするSEO・検索最適化の専門家です。' +
            'ユーザーがマイナポータルの特定の機能やサービスを見つけるために使いそうな検索クエリを予測し、' +
            '最適なタイトル、説明文、キーワードを抽出します。\n\n' +
            '# 抽出する情報\n' +
            '1. **description**: ページの機能や提供価値を説明する50文字以内の簡潔な説明文（体言止め・名詞で終わる形式）\n' +
            '2. **keywords**: ユーザーが検索で使用しそうな10-15個の重要キーワード\n' +
            '3. **category**: 下記カテゴリリストから最も適切なもの1つ\n\n' +
            '# カテゴリリスト\n' +
            categories.join(', ') +
            '\n\n' +
            '# キーワード抽出のポイント\n' +
            '- 行政サービスの**正式名称**と**一般的な呼び名**の両方を含める (例: 「児童手当」と「子ども手当」)\n' +
            '- **特定の手続き名**を含める (例: 「転出届」「所得証明書発行」)\n' +
            '- **生活イベント関連語**を含める (例: 「引越し」「出産」「退職」)\n' +
            '- **書類・証明書名**を含める (例: 「住民票」「課税証明書」)\n' +
            '- **行政・法律用語**と**一般的な言い換え**の両方を含める\n' +
            '- **問題やニーズ**に関する言葉を含める (例: 「手続き方法」「期限」「必要書類」)\n' +
            '- **地域・対象者**に関する言葉を含める (例: 「世帯主」「扶養家族」)\n\n' +
            '# 説明文の形式\n' +
            '- 「〜のための機能」「〜に関する情報」など、名詞で終わる体言止め\n' +
            '- 「マイナンバーカードを使った〜手続き」など、簡潔な形式\n' +
            '- 「です・ます」や「である」などの語尾を使わない\n\n' +
            '# 回答形式\n' +
            '厳密に以下のJSON形式で返してください:\n' +
            '{\n' +
            '  "description": "100文字以内の体言止め説明文",\n' +
            '  "keywords": ["キーワード1", "キーワード2", ...],\n' +
            '  "category": "最適なカテゴリ1つ"\n' +
            '}',
        },
        {
          role: 'user',
          content: `以下のマイナポータルページを分析し、ユーザーが効率的に見つけられるようにするためのメタデータを生成してください。\n\nURL: ${url}\n\nページ内容:\n${truncatedText}`,
        },
      ],
      response_format: { type: 'json_object' },
      temperature: 0.3,
    });

    const content = response.choices[0].message.content;
    if (!content) {
      throw new Error('APIからの応答が空です');
    }

    const parsedContent = JSON.parse(content);
    return {
      title: title || '',
      description: parsedContent.description || '',
      keywords: parsedContent.keywords || [],
      category: parsedContent.category || '',
    };
  } catch (error) {
    console.error('メタデータ抽出中にエラーが発生しました:', error);
    throw error;
  }
}
