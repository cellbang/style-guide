/**
 * This is the build ESLint config files.
 */
const baseConfig = require('./base');
const errorConfig = require('./errors');

export default [...baseConfig, ...errorConfig];
