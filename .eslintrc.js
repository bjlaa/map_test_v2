module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'semi': 0,
    'comma-dangle': 0,
    'func-names': 0,
    'no-param-reassign': 0,
    'max-len': 0,
    'no-unneeded-ternary': 0,
    'no-trailing-spaces': 0,
    'import/prefer-default-export': 0,
    'prefer-arrow-callback': 0,
    'prefer-template': 0,
    'no-mixed-operators': 0,
    'no-bitwise': 0
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
