/* exported Log */
/* Magic Mirror 2 arm64 Version
 * Socket Connection
 *
 * orginal by Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * Revised by Stacy E.Webb https://stacywebb.com
 * MIT Licensed.
 */
var MMSocket = function (moduleName) {
  var self = this;
  if (typeof moduleName !== "string") {
    throw new Error("Please set the module name for the MMSocket.");
  }
  self.moduleName = moduleName;
  self.socket = io("http://localhost:8080");
  self.socket.on("notification", function (data) {
    MM.sendNotification(data.notification, data.payload, Socket);
  });
  return {
    sendMessage: function (notification, payload, sender) {
      Log.log("Send socket message: " + notification);
      self.socket.emit("notification", {
        notification: notification,
        sender: sender,
        payload: payload
      });
    }
  };
};