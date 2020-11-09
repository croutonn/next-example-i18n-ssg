import * as Home from '@/pages'

const getStaticProps = Home.createGetStaticProps('en')

export default Home.default
export { getStaticProps }
