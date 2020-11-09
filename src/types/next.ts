import { Resource } from 'i18next'

import { I18nPublicConfig, I18nServerConfig } from '@/types/i18n'

type PublicRuntimeConfig = {
  i18n: I18nPublicConfig
}

type ServerRuntimeConfig = {
  i18n: I18nServerConfig
}

type PageProps<
  P extends Record<string, unknown> = Record<string, unknown>
> = P & { i18n: Resource }
export type { PublicRuntimeConfig, ServerRuntimeConfig, PageProps }
