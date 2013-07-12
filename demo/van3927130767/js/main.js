
(function(){
  "use strict";
  $(function(){
    $('.info').on('click', function(){
      $(this).find('table').toggle('slow');
      $(this).find('p').toggle('slow');
      $('html, body').animate({
       scrollTop: $(this).offset().top
      }, 500);
    });
  });
})();
