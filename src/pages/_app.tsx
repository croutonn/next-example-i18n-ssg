import { AppType } from 'next/dist/next-server/lib/utils'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { I18nextProvider, useSSR } from 'react-i18next'

import i18n, { routeToLocale } from '@/lib/i18n'

const App: AppType = (props) => {
  const router = useRouter()
  const locale = useMemo(() => routeToLocale(router.asPath), [router.asPath])
  useSSR(props.pageProps.i18n, locale)

  return (
    <I18nextProvider i18n={i18n}>
      <props.Component {...props.pageProps} />
    </I18nextProvider>
  )
}

export default App
