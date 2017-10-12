/* Magic Mirror 2 arm64 Version
 * Config
 *
 * orginal by Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * Revised by Stacy E.Webb https://stacywebb.com
 * MIT Licensed.
 *
 */
var config = {
  port: 8080,
  ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.0.0/56"],
  // Set [] to allow all IP addresses
  // or add a specific IPv4 of 192.168.1.5 :
  // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
  // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
  // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],
  language: "en",
  timeFormat: 12,
  units: "imperial",
  modules: [
    //{
    //  module: "updatenotification",
    //  position: "top_bar"
    //},
    {
      module: "clock",
      position: "top_center",
      config: {}
    },
    {
      module: 'background',
      position: 'fullscreen_below',
      config: {
        videoSRC: "./modules/MMM-htmlvideo/videos/blue_water.gif",
        loop: true,
      }
    },
    {
      module: 'myweather',
      position: 'middle_center',
      config: {
        apikey: '288436286f6328b5',
        pws: 'pws:KVAROANO45',
        coloricon: true,
        hourly: '1',
        fctext: '1',
        fcdaycount: "8",
        fcdaystart: "0",
        hourlyinterval: "3",
        hourlycount: "2",
        alerttime: 10000,
        alerttruncatestring: "english:",
        roundTmpDecs: 1,
        //UseCardinals: 0,
        layout: "horizontal",
        iconset: "weezle",
        currentweatherdetails: "0"
      }
    },
    {
      module: "newsfeed",
      position: "bottom_bar",
      config: {
        feeds: [{
            title: "New York Times",
            url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
        },
          {
            title: "National Weather Service",
            url: "https://www.weather.gov/rss_page.php?site_name=nws"
                }
               ],
        showSourceTitle: true,
        showPublishDate: true
      }
    },
  ]
};
/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
  module.exports = config;
}