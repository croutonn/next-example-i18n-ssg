module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true,
  },
  extends: ['@croutonn'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        'react/jsx-props-no-spreading': [
          'error',
          {
            html: 'enforce',
            custom: 'enforce',
            explicitSpread: 'ignore',
            exceptions: ['Component', 'props.Component', 'NextSeo'],
          },
        ],
      },
    },
  ],
}
