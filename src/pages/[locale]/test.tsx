import { ParsedUrlQuery } from 'querystring'

import { GetStaticPaths } from 'next'

import { getI18nStaticPaths } from '@/lib/i18n'
import * as TestPage from '@/pages/test'

type TestPageParams = ParsedUrlQuery

const { getStaticProps } = TestPage

const getStaticPaths: GetStaticPaths<TestPageParams> = async () =>
  getI18nStaticPaths()

export default TestPage.default
export { getStaticProps, getStaticPaths }
