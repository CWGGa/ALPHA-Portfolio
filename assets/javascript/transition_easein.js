const transitionOpacity = new TimelineLite({});

window.addEventListener('load', function (event) {

    transitionOpacity.fromTo('body', 1, {
        opacity: 0,
        ease: Power2.easeIn
    }, {
        opacity: 1
    });
});