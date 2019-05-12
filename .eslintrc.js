module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
  },
  globals: {
    graphql: true,
    __PATH_PREFIX__: true,
  },
  extends: `react-app`,
  plugins: ['prettier', 'react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'prettier/prettier': 'warn',
    'no-unused-vars': 'warn',
  },
};
