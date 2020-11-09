type Locale = 'ja' | 'en'

type I18nPublicConfig = {
  locales: Locale[]
  defaultLocale: Locale
}

type I18nServerConfig = {
  defaultNamespaces: string[]
  resourceDir: string
}

export type { Locale, I18nPublicConfig, I18nServerConfig }
