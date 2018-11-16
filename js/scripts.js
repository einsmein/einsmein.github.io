$(document).ready(function() {
        $(window).scroll( function ()
        {
//               var navHeight = $( window ).height() - 70;
              var navHeight = 50;
              if ($(window).scrollTop() > navHeight) {
                $('nav').addClass('fixed');
              }
              else {
                $('nav').removeClass('fixed');
              }
        });
});
