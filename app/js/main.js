$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 450) {
        $('.navbar').addClass('smallnav');
    } else {
        $('.navbar').removeClass('smallnav');
    }
});