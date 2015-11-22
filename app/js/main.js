$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 200) {
        $('.navbar').addClass('smallnav');
    } else {
        $('.navbar').removeClass('smallnav');
    }
});

$(function() {
    FastClick.attach(document.body);
});