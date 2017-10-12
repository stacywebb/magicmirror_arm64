/* Magic Mirror 2 arm64 Version
 * Default Modules List
 *
 * orginal by Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * Revised by Stacy E.Webb https://stacywebb.com
 * MIT Licensed.
 */
// Modules listed below can be loaded without the 'default/' prefix. Omitting the default folder name.
var defaultModules = [
  "alert",
  "calendar",
  "clock",
  "compliments",
  "currentweather",
  "helloworld",
  "newsfeed",
  "weatherforecast",
  "updatenotification"
];
/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
  module.exports = defaultModules;
}
