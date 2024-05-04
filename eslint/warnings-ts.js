/**
 * This is the warnings only for typescript ESLint config files.
 */
const deprecationPlugin = require('eslint-plugin-no-deprecation');
module.exports = [
  {
    plugins: { deprecation: deprecationPlugin },
    rules: {
      '@typescript-eslint/await-thenable': 'warn',
      'deprecation/deprecation': 'warn'
    }
  }
];
