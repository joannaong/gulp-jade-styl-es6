// internal requires
var util = require('./util.js');

var init = function() {
  console.log("init");
}

var buildObjects = function() {
  console.log("buildObjects this");
}

var buildHandlers = function() {
  console.log("buildHandlers that");
}

// on document ready
$(function() {
  init();
});
