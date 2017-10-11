/* global Module */

/* Magic Mirror
 * Module: Background
 */
/*

* Add to config.js
*
*   {
*       module: 'background',
*       position: 'fullscreen_below',
*       config: {
*           videoSRC: "Onzen.mp4",
*           loop: true,
*       }
*   },
*/

 Module.register("background",{

 	// Default module config.
 	defaults: {
 		videoSRC: "Onzen.mp4",
 		loop: true,
 	},

 	// get stylesheet
 	getStyles: function() {
 		return ["background.css"];
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
