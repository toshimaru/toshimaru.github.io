
(function(){
  "use strict";
  $(function(){
    $('.info').on('click', function(){
      $(this).find('table').slideToggle('slow');
      $(this).find('p').slideToggle('slow');
      $('html, body').animate({
       scrollTop: $(this).offset().top
      }, 500);
    });
  });
})();
