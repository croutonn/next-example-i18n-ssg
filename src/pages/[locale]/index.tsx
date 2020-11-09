import { GetStaticPaths } from 'next'

import { getI18nStaticPaths } from '@/lib/i18n'
import * as Home from '@/pages'
import { Locale } from '@/types/i18n'

type LocaleParams = {
  locale: Locale
}

const { getStaticProps } = Home

const getStaticPaths: GetStaticPaths<LocaleParams> = async () =>
  getI18nStaticPaths()

export default Home.default

export { getStaticProps, getStaticPaths }
