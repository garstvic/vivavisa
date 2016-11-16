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

    // testimonials - begin
    function testimonials(){
        $('.testimonials').each(function(i,obj){
            var img = $(obj).find('img'),
                block = $(obj).find('blockquote'),
                blockHeight = block.height(),
                margin = (blockHeight - 130) / 2;
                

                if (margin > 0) {
                img.css('margin-top', margin + 'px');
                }
        });
    }
    testimonials();

    // testimonials - end

    // dear-friends - begin
    function dear_friends(){
        if ($(window).width() > $(window).height()){
            var div = $('.features-desc'),
                text = div.find('.dear-friends'),
                img = div.find('img'),
                height = text.height();

            img.css('height', height - 10 + 'px');
        };
    };
    // dear-friends - end
    window.onload = function(){
        dear_friends();
    };
    function fontSize (){
    // maximum font size
        var maxFontSize = 12,
            minFontSize = 6;

        var winWidth = $(window).width(),
            divider = 40;
        
        if (winWidth > 1440 && winWidth <=1600) {
            divinder = 25;
        } else if (winWidth > 1600 && winWidth <= 1680) {
            divinder = 10;
        }
        
        maxFontSize = $(window).width() / divider;
        minFontSize = $(window).width() / 100;


        // flowType
        $('.st-home-unit').flowtype({
            minimum : winWidth / 2,
            maximum : winWidth,
            minFont : minFontSize,
            maxFont : maxFontSize
        });
   
    }
    fontSize();

    function home_height () {


        var element = $('.st-home-unit'),
            winHeight = $(window).height();

//        var elemHeight = element.height(),
        var elemHeight = element.height(),
            marginTop = (winHeight - elemHeight - 140) / 2;
        
        if (marginTop < 1) {
            marginTop = 0;
        };
        element.css('margin', marginTop+'px 0');
    }
    home_height();
   
    // choose stylesheets
/*    function adjustStyle(width) {
        width = parseInt(width);
        if (width < 321) {
            $("#size-stylesheet").attr("href", "css/320px.css");
        } else {
            $("#size-stylesheet").attr("href", "css/style.css");
        }
    }
    adjustStyle($(window).width());
*/
    $(window).resize(function () {
//        adjustStyle($(this).width());
        fontSize();
        testimonials();
        home_height ();
        // костыль
        resize(); 
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

        if (offset >= 80) {
            $('.st-navbar').addClass("st-navbar-mini");
            $('.brand-img').attr('src', 'img/logo-white.png');
        } else if (offset <= 79) {
            $('.st-navbar').removeClass("st-navbar-mini");
            $('.brand-img').attr('src', 'img/logo-brown.png');
        }

    });


    // animation
    new WOW().init();

    $(window).load(function(){
    });

});
