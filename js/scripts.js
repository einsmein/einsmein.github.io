$(document).ready(function() {
    $(window).scroll( function () {
        var navHeight = 100;
        if ($(window).scrollTop() > navHeight) {
            $('nav').addClass('fixed');
            $('#navx').css('display', 'block');
        }
        else {
            $('nav').removeClass('fixed');
            $('#navx').css('display', 'none');
        }
    });

    function setBackgroundSize() {
        var bg = $('#about-bg');
        var wth = 1.5;
        var h = $(window).height();
        var w = $(window).width();
        if (w/h > 1.5) {
            bg.css('width', w);
            bg.css('height', 'auto')
        }
        else {
            bg.css('width', 'auto');
            bg.css('height', h);
        }
    }

    function setAboutSize() {
        var aboutWrap = $('#about-wrap');
        var aboutOverlay = $('#about-overlay');
        var about = $('#about');
        var h = $(window).height();
        if (h > 884) {
          aboutWrap.css('height', h-150);
          aboutOverlay.css('height', h-150);
          about.css('height', h-150-120);
        } else {
          aboutWrap.css('height', h-150+200);
          aboutOverlay.css('height', h-150+200);
          about.css('height', h-150-120+200);

        }
    }

    function setProjectSize() {
        var cardHolder = $('#card-holder');
        var cards = $('.card');
        var cardsHo = $('.card-ho');
        var w = $(window).width();
        var h = $(window).height();
        // cardHolder.css('height', h-50);
        var cardW = Math.floor((w-1)/3)
        if(cardW > 300){
          cardHolder.css('height', h-50+1);
          cards.css('width', cardW);
          cards.css('height', '70%');
          cardsHo.css('height', '30%');
        }
        else{
          cards.css('width', w);
          cards.css('height', Math.floor(h/3));
          cardsHo.css('height', Math.floor(h/3));
        }
    }

    setAboutSize();
    setBackgroundSize();
    setProjectSize();

    $(window).resize(function() {
        setAboutSize();
        setBackgroundSize();
        setProjectSize();
    })
});

