$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $(".navbar-transparent").addClass("navbar-scrolled");
        $(".alink").addClass("nav-scroll");
    } else {
        $(".navbar-transparent").removeClass("navbar-scrolled");
        $(".alink").removeClass("nav-scroll");
    }

});