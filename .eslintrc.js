module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/prettier', '@vue/typescript'],

  parserOptions: {
    parser: '@typescript-eslint/parser'
  },

  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        trailingComma: 'none',
        arrowParens: 'avoid',
        printWidth: 100,
        endOfLine: 'auto'
      }
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'comma-dangle': 0,
    quotes: 0,
    'vue/no-use-v-if-with-v-for': [
      'error',
      {
        allowUsingIterationVar: true
      }
    ],
    '@typescript-eslint/no-explicit-any': ['error'], //禁止使用any
    eqeqeq: 2, //必须使用全等
    'max-lines': ['error', 500] //限制行数
  }
}
