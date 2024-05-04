/**
 * This is the errors ESLint config files.
 */
const tsConfig = require('@typescript-eslint/eslint-plugin');
const { FlatCompat } = require('@eslint/eslintrc');
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: tsConfig.configs['recommended-requiring-type-checking']
});
module.exports = [...compat.config({})];
