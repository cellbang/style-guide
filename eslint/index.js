/**
 * This is all ESLint config files.
 */
const baseConfig = require('./base');
const errorConfig = require('./errors');
const errorTSConfig = require('./errors-ts');
const warningConfig = require('./warnings');
const warningTSConfig = require('./warnings-ts');
const xssConfig = require('./xss');

module.exports = [
  ...baseConfig,
  ...errorConfig,
  ...errorTSConfig,
  ...warningConfig,
  ...warningTSConfig,
  ...xssConfig
];
