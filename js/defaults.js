/* exported defaults */
/* Magic Mirror 2 arm64 Version
 * Config Defauls
 *
 * orginal by Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * Revised by Stacy E.Webb https://stacywebb.com
 * MIT Licensed.
 */
var port = 8080;
var mmPort;
if (typeof (mmPort) !== "undefined") {
  port = mmPort;
}
var defaults = {
  port: port,
  kioskmode: false,
  electronOptions: {},
  ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.0.0/56"],
  language: "en",
  timeFormat: 12,
  units: "imperial",
  zoom: 1,
  customCss: "css/custom.css",
  modules: [
    {
      module: "updatenotification",
      position: "top_center"
    },
    {
      module: "helloworld",
      position: "upper_third",
      classes: "large thin",
      config: {
        text: "Magic Mirror<sup>2</sup> arm64 Version"
      }
    },
    {
      module: "helloworld",
      position: "middle_center",
      config: {
        text: "Please create a config file."
      }
    },
    {
      module: "helloworld",
      position: "middle_center",
      classes: "small dimmed",
      config: {
        text: "See README for more information."
      }
    },
    {
      module: "helloworld",
      position: "middle_center",
      classes: "xsmall",
      config: {
        text: "If you get this message while your config file is already<br>created, your config file probably contains an error.<br>Use a JavaScript linter to validate your file."
      }
    },
    {
      module: "helloworld",
      position: "bottom_bar",
      classes: "xsmall dimmed",
      config: {
        text: "MagicMirror_arm64 version. Stacy E. Webb"
      }
    },
  ],
  paths: {
    modules: "modules",
    vendor: "vendor"
  },
};
/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
  module.exports = defaults;
}