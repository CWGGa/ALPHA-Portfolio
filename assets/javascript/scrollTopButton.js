$(document).ready(function () {
    let scrollTop = $(".scroll-top");
    scrollTop.hide((duratiom = 400));

    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            scrollTop.show((duratiom = 400));
        } else {
            scrollTop.hide((duratiom = 400));
        }
    });

    scrollTop.click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 700);
    });
});