$(function(){
  "use strict";

  var colors = ['lightblue', 'lightpink', 'lightgreen', 'lightsalmon'];

  $('body').css('background-color', sample(colors));
  $('#top').fadeIn(1200);

  function sample(ary) {
    return ary[Math.floor(Math.random() * ary.length)];
  }
});
