/**
 * This is the errors ESLint config files.
 */
module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  rules: {
    '@typescript-eslint/consistent-type-definitions': 'error',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        avoidEscape: true
      }
    ],
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/type-annotation-spacing': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'as-needed'],
    camelcase: 'off',
    'comma-dangle': 'off',
    curly: 'error',
    'eol-last': 'error',
    eqeqeq: ['error', 'smart'],
    'guard-for-in': 'error',
    'id-blacklist': 'off',
    'id-match': 'off',
    'max-len': [
      'error',
      {
        code: 180
      }
    ],
    'no-duplicate-imports': 'error',
    'no-magic-numbers': 'off',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1
      }
    ],
    'no-new-wrappers': 'error',
    'no-null/no-null': 'error',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': [
      'error',
      {
        hoist: 'all'
      }
    ],
    'no-tabs': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-underscore-dangle': 'off',
    'no-unreachable': 'error',
    'no-unused-expressions': 'error',
    'no-void': 'error',
    'one-var': ['error', 'never'],
    'prefer-const': [
      'error',
      {
        destructuring: 'all'
      }
    ],
    radix: 'off',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'spaced-comment': [
      'error',
      'always',
      {
        exceptions: ['*', '+', '-', '/']
      }
    ],
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: false,
        allowTypedFunctionExpressions: false,
        allowHigherOrderFunctions: false,
        allowDirectConstAssertionInArrowFunctions: true,
        allowConciseArrowFunctionExpressionsStartingWithVoid: true
      }
    ],
    '@typescript-eslint/explicit-module-boundary-types': [
      'error',
      {
        allowArgumentsExplicitlyTypedAsAny: true,
        allowDirectConstAssertionInArrowFunctions: true,
        allowHigherOrderFunctions: false,
        allowTypedFunctionExpressions: false
      }
    ],
    '@typescript-eslint/typedef': [
      'error',
      {
        propertyDeclaration: true
      }
    ],
    'brace-style': ['error', '1tbs'],
    'jsdoc/check-alignment': 'error',
    'jsdoc/check-indentation': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-dynamic-require': 'error',
    'no-restricted-imports': ['error', '.', './', '..', '../']
  },
  overrides: [
    {
      files: ['**/*.{spec,espec,slow-spec}.{js,ts}'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'no-unused-expressions': 'off'
      }
    },
    {
      files: ['**/electron-{node,main}/**'],
      rules: {
        'import/no-dynamic-require': 'off'
      }
    }
  ]
};
