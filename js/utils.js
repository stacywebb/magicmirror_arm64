/* exported Utils */
/* Magic Mirror 2 arm64 Version
 * Utils
 *
 * By Rodrigo Ramírez Norambuena https://rodrigoramirez.com
 * MIT Licensed.
 *
 * Revised by Stacy E.Webb https://stacywebb.com
 * MIT Licensed.
 */
var colors = require("colors/safe");
var Utils = {
  colors: {
    warn: colors.yellow,
    error: colors.red,
    info: colors.blue
  }
};
if (typeof module !== "undefined") {
  module.exports = Utils;
}