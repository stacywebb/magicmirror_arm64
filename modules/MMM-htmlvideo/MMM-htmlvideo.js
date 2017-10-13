/* Magic Mirror
 * Module: MMM-htmlvideo
 *
 * By Pierre Broberg
 * MIT Licensed.
 */
// videoSRC = "https://i.giphy.com/media/xT9DPKLUNd7GJi642A/giphy.mp4";
Module.register("MMM-htmlvideo",{
  // Default module config.
  defaults: {
    videoSRC: './modules/MMM-htmlvideo/videos/yellow_abstract.gif',
    loop: true,
  },
  // get stylesheet
  getStyles: function() {
    return ["htmlvideo.css"];
  },
  // Override dom generator.
  getDom: function() {
    var video =  document.createElement("video");
    video.src = this.config.videoSRC;
    video.autoplay = true;
    video.loop = this.config.loop;
    return video;
  }
});
