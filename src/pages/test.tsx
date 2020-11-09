import { ParsedUrlQuery } from 'querystring'

import { GetStaticProps } from 'next'

import { getI18nStaticProps } from '@/lib/i18n'
import { PageProps } from '@/types'
import { Locale } from '@/types/i18n'

type TestPageParams = ParsedUrlQuery
type TestPageProps = PageProps

const TestPage: React.FunctionComponent<TestPageProps> = () => {
  return (
    <>
      <h1>Test Page</h1>
    </>
  )
}

const getStaticProps: GetStaticProps<TestPageProps, TestPageParams> = async (
  context
) =>
  getI18nStaticProps({
    locale: context.params?.locale as Locale,
    namespaces: ['common'],
  })

export default TestPage
export { getStaticProps }
