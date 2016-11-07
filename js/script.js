$(function (){
    $(window).stellar({
        horizontalScrolling: false
    });

    // Custom Scrollbar
    var nice = $("html").niceScroll({
        cursorwidth: 8,
        cursorborder: "0px solid #fff",
        cursorborderradius: '0',
        cursorcolor: '#ea5827'
    });

    function home_height () {
        var element = $('.st-home-unit'),
            elemHeight = element.height(),
            winHeight = $(window).height(),
            padding = (winHeight - elemHeight - 200) / 2;

        if (padding < 1) {
            padding = 0;
        };
        element.css('padding', padding+'px 0');
    }
    home_height();
    
});
