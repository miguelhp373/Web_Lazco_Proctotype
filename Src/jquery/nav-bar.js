$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 10) {
            $('.nav-bar-top-fixed-home').css({'background-color':'#ecf0f1'});
            $('.links-item-nav').attr('style', 'color: black !important')
            $('.items-nav-bar').attr('style', 'color: black !important')
            $('.nav-bar-top-fixed-home').css("opacity","90%");
           
        } else {
            $('.nav-bar-top-fixed-home').css("background-color", "transparent")
            $('.nav-bar-top-fixed-home').css("opacity","100%");
            $('.links-item-nav').attr('style', 'color: #FFF !important')
            $('.items-nav-bar').attr('style', 'color: #FFF !important')
            $('.dropdown-item').attr('style', 'color: #000 !important')
        }
    });
});