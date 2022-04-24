module.exports = {
  root: true, // 表示该文件为根配置文件
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'qaApp' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'qaApp' ? 'warn' : 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off', // 去除 函数必须 return 问题
    'vue/comment-directive': 'off', // 去除 html 文件 clear问题
    indent: 'off', // 去除 js中写 const 右下角总是弹报错问题
    '@typescript-eslint/no-var-requires': 0 // 除去 require 报错
    // camelcase: [0, { properties: 'always' }],

  }
}
