/**
 * This is the xxs ESLint config files.
 */
const domPlugin = require('eslint-plugin-no-unsanitized');
const reactPlugin = require('eslint-plugin-react');
const { FlatCompat } = require('@eslint/eslintrc');
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: domPlugin.configs.DOM
});
module.exports = [
  ...compat.config({}),
  {
    plugins: { 'no-unsanitized': domPlugin, react: reactPlugin },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    rules: {
      'no-unsanitized/method': ['warn'],
      'no-unsanitized/property': ['warn'],
      'no-eval': 'warn',
      'no-implied-eval': 'warn',
      'react/no-danger-with-children': 'warn',
      'react/no-danger': 'warn'
    }
  }
];
