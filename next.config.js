const i18n = require('./i18n.config')

module.exports = {
  publicRuntimeConfig: {
    i18n: {
      locales: i18n.locales,
      defaultLocale: i18n.defaultLocale,
    },
  },
  serverRuntimeConfig: {
    i18n: {
      defaultNamespaces: i18n.defaultNamespaces,
      resourceDir: i18n.resourceDir,
    },
  },
  redirects: async () => {
    return [
      {
        source: '/ja',
        destination: '/',
        permanent: true,
      },
    ]
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // eslint-disable-next-line no-param-reassign
      config.node = {
        fs: 'empty',
      }
    }

    return config
  },
}
