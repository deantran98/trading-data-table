module.exports = {
  'parser': '@typescript-eslint/parser',
  'extends': ['next/core-web-vitals', 'plugin:prettier/recommended'],
  'prettier/prettier': [
    'error',
    {
      endOfLine: 'auto',
    },
  ],
}
