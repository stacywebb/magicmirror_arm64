/* global console */
/* exported Log */
/* Magic Mirror 2 arm64 Version
 * Logger
 *
 * orginal by Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * Revised by Stacy E.Webb https://stacywebb.com
 * MIT Licensed.
 */
// This logger is very simple, but needs to be extended.
// This system can eventually be used to push the log messages to an external target.
var Log = (function () {
  return {
    info: Function.prototype.bind.call(console.info, console),
    log: Function.prototype.bind.call(console.log, console),
    error: Function.prototype.bind.call(console.error, console),
    warn: Function.prototype.bind.call(console.warn, console),
    group: Function.prototype.bind.call(console.group, console),
    groupCollapsed: Function.prototype.bind.call(console.groupCollapsed, console),
    groupEnd: Function.prototype.bind.call(console.groupEnd, console),
    time: Function.prototype.bind.call(console.time, console),
    timeEnd: Function.prototype.bind.call(console.timeEnd, console),
    timeStamp: Function.prototype.bind.call(console.timeStamp, console)
  };
})();