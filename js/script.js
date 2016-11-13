$(function (){
    $(window).stellar({
        horizontalScrolling: false
    });

    // Custom Scrollbar
    var nice = $("html").niceScroll({
        cursorwidth: 14,
        cursorborder: "0px solid #000",
        cursorborderradius: '0',
        cursorcolor: 'rgba(54,71,79,1)'
    });

    // animation

    new WOW().init();

    function home_height () {
        var element = $('.st-home-unit'),
            elemHeight = element.height(),
            winHeight = $(window).height(),
            marginTop = (winHeight - elemHeight - 160) / 2;

        if (marginTop < 1) {
            marginTop = 0;
        };
        element.css('margin', marginTop+'px 0');
//        element.css('margin-top', marginTop+'px');
//        element.css('margin-bottom', marginBottom+'px'); 
    }
    home_height();
    
    $(window).resize(function () {
        home_height ();
    });

    var fadeStart = $(window).height()/3
        ,fadeUntil = $(window).height()
        ,fading = $('.st-home-unit')
    ;

    $(window).bind('scroll', function () {
        var offset = $(document).scrollTop()
            ,opacity = 0
            ,opacity2 = 1
        ;

        if (offset <= fadeStart) {
            opacity = 1;
            opacity2 = 0;
        } else if (offset <= fadeUntil) {
            opacity = 1 - offset / fadeUntil;
            opacity2 = offset / fadeUntil;
        }

        fading.css({'opacity': opacity});

        if (offset >= 120) {
            $('.st-navbar').addClass("st-navbar-mini");
        } else if (offset <= 119) {
            $('.st-navbar').removeClass("st-navbar-mini");
        }

    });

});
