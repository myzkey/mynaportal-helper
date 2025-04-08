/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTranslation as useOriginalTranslation } from 'react-i18next'
import type ja from '@src/i18n/locales/ja.json'

/* eslint-disable @typescript-eslint/no-unused-vars */
type ExtractInterpolation<S extends string> = S extends `${infer _}{{${infer Var}}}${infer Rest}`
  ? Var | ExtractInterpolation<Rest>
  : never

type ExtractInterpolationParams<T> = {
  [K in keyof T]: T[K] extends string
    ? ExtractInterpolation<T[K]> extends never
      ? undefined
      : { [P in ExtractInterpolation<T[K]>]: string }
    : T[K] extends Record<string, any>
      ? ExtractInterpolationParams<T[K]>
      : undefined
}

type Join<K, P> = K extends string | number ? (P extends string | number ? `${K}.${P}` : never) : never

type Primitive = string | number | boolean | null | undefined

type FlattenParams<T, P extends string = ''> = {
  [K in keyof T]: K extends string
    ? T[K] extends Primitive
      ? P extends ''
        ? K
        : `${P}.${K}`
      : T[K] extends Record<string, any>
        ? FlattenParams<T[K], P extends '' ? K : `${P}.${K}`>
        : never
    : never
}[keyof T]

// カスタム型ヘルパー
type TranslationKeys = keyof typeof ja | FlattenParams<typeof ja>

// 補間変数を取得する型
type GetInterpolationParams<K extends TranslationKeys> = K extends keyof typeof ja
  ? (typeof ja)[K] extends string
    ? ExtractInterpolation<(typeof ja)[K]> extends never
      ? undefined
      : { [P in ExtractInterpolation<(typeof ja)[K]>]: string }
    : undefined
  : undefined

// 安全なt関数の型
type SafeTFunction = <K extends TranslationKeys>(
  key: K,
  options?: GetInterpolationParams<K> extends undefined ? never : GetInterpolationParams<K>,
) => string

export const useSafeTranslation = () => {
  const { t } = useOriginalTranslation()
  const safeT = t as SafeTFunction
  return { t: safeT }
}
