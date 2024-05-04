/**
 * This is all ESLint config files for javascript.
 */
const baseConfig = require('./base');
const errorConfig = require('./errors');
const warningConfig = require('./warnings');
const xssConfig = require('./xss');

module.exports = [
  ...baseConfig,
  ...errorConfig,
  ...warningConfig,
  ...xssConfig
];
