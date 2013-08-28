(function(){
  var userAgent = window.navigator.userAgent.toLowerCase();

  var device_type = 'desktop';
  if(userAgent.indexOf('ipad') > 0 ||
     userAgent.indexOf('iphone') > 0 ||
     userAgent.indexOf('ipod') > 0 ||
     userAgent.indexOf('android') > 0) {
     var win = $(window);
     if (win.width() > win.height()) {
         device_type = 'tablet';
     } else {
         device_type = 'phone';
     }
  }

  $(function(){
    $('section[data-type="background"]').each(function(){
      var $bgobj = $(this);

      $(window).scroll(function() {
        var yPos = -($(window).scrollTop() / $bgobj.data('speed'));
        var coords = '50% '+ yPos + 'px';
        $bgobj.css({ backgroundPosition: coords });
      });
    });
  });
  
})();


