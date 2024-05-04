/**
 * This is the warnings ESLint config files.
 */
module.exports = [
  {
    rules: {
      'no-return-await': 'warn',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
      '@typescript-eslint/no-non-null-assertion': 'off'
    }
  }
];
