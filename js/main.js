$(function(){
  "use strict";

  var colors = ['lightblue', 'lightpink', 'lightgreen', 'lightsalmon'];

  function sample(ary) {
    return ary[Math.floor(Math.random() * ary.length)];
  }

  $('body').css('background-color', sample(colors));
});
