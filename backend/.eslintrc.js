module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  plugins: ['prettier', '@typescript-eslint'],
  root: true,
  env: {
    node: true,
    es2021: true
  },
  ignorePatterns: ['.eslintrc.js'],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
    'prettier/prettier': 'warn',
    radix: 'off',
    'comma-dangle': 'off',
    'linebreak-style': 'off',
    'arrow-parens': 'off',
    'no-param-reassign': 'off',
    'no-restricted-syntax': 'off',
    'import/prefer-default-export': 'off',
    'implicit-arrow-linebreak': 'off',
    'func-names': 'off',
    'no-plusplus': 'off',
    'consistent-return': 'off',
    'no-console': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ["error", { argsIgnorePattern: "req|res|next" }],
    'object-shorthand': 'off',
    'no-underscore-dangle': ['error', { allow: ['_id', '__v'] }],
    '@typescript-eslint/explicit-module-boundary-types': 'off'
  },
  extends: ["plugin:@typescript-eslint/recommended"]
};
