import getConfig from 'next/config'
import { AppType } from 'next/dist/next-server/lib/utils'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useMemo } from 'react'
import { I18nextProvider, useSSR } from 'react-i18next'

import i18n, { routeToLocale } from '@/lib/i18n'
import { removeRootDirPath, removeTrailingSlash } from '@/lib/string-utils'
import { PublicRuntimeConfig } from '@/types'

const App: AppType = (props) => {
  const router = useRouter()
  const locale = useMemo(() => routeToLocale(router.asPath), [router.asPath])

  // Render the translation on the server side
  useSSR(props.pageProps.i18n, locale)

  const {
    publicRuntimeConfig: { i18n: i18nPublicConfig },
  } = getConfig<PublicRuntimeConfig>()

  // whether the route is `/${defaultLocale}/...`
  const isNotCanonicalPage = useMemo(
    () => router.query.locale === i18nPublicConfig.defaultLocale,
    [router.query.locale, i18nPublicConfig.defaultLocale]
  )

  // URL with `/${defaultLocale}` removed
  const canonicalUrl = useMemo(
    () =>
      !isNotCanonicalPage
        ? ''
        : `${removeTrailingSlash(router.basePath)}${removeRootDirPath(
            router.asPath
          )}` || '/',
    [isNotCanonicalPage, router.asPath, router.basePath]
  )

  // Redirect when a non canonical page is accessed
  useEffect(() => {
    if (isNotCanonicalPage) {
      router.replace(canonicalUrl)
    }
  }, [isNotCanonicalPage, canonicalUrl, router])

  return (
    <I18nextProvider i18n={i18n}>
      {isNotCanonicalPage && (
        <Head>
          <link rel="canonical" href={canonicalUrl} />
        </Head>
      )}
      <props.Component {...props.pageProps} />
    </I18nextProvider>
  )
}

export default App
