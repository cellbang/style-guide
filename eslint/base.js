/**
 * This is the base for both our browser and Node ESLint config files.
 */
const parser = require('@typescript-eslint/parser');
const eslintPlugin = require('@typescript-eslint/eslint-plugin');
const jsdocPlugin = require('eslint-plugin-jsdoc');
const importPlugin = require('eslint-plugin-import');
const noNullPlugin = require('eslint-plugin-no-null');
const globals = require('globals');

module.exports = [
  {
    plugins: {
      '@typescript-eslint': eslintPlugin,
      jsdoc: jsdocPlugin,
      import: importPlugin,
      'no-null': noNullPlugin
    },
    ignores: ['**/node_modules/**', '**/lib/**'],
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 6,
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.mocha
      },
      parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    }
  }
];
