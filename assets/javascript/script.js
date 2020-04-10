const developersButton = document.querySelector('.main-developers');
const aboutusButton = document.querySelector('.main-aboutus');
const worksButton = document.querySelector('.main-works');
const skillsButton = document.querySelector('.main-services');

const tl = new TimelineLite({});

var devHeight = document.querySelector('.main-developers')

window.addEventListener('load', function (event) {

    $('.home-button').css("display", "none");

    tl.to('.main-developers', 1, {
        ease: Power2.easeout,
        y: 0
    })

    tl.to('.main-works', 1.1, {
        ease: Power2.easeout,
        x: 0,
        delay: -1
    })

    tl.to('.main-aboutus', 1.2, {
        ease: Power2.easeout,
        x: 0,
        delay: -1
    })

    tl.to('.main-services', 1.3, {
        ease: Power2.easeout,
        y: 0,
        delay: -1,
        onComplete: function () {
            $('.home-button').css("display", "flex");
        }
    })

});

// DEVELOPERS

const developersAnimation = new TimelineLite({});

developersButton.addEventListener('click', function () {

    $('.home-button').css("display", "none");

    developersAnimation.to('.main-works', 1, {
        x: function () {
            var worWidth = document.querySelector('.main-works')
            return (worWidth.offsetWidth);
        },
        ease: Power2.easeIn,
        delay: -.5
    })

    developersAnimation.to('.main-aboutus', 1, {
        x: function () {
            var aboutusWidth = document.querySelector('.main-aboutus')
            return -(aboutusWidth.offsetWidth);
        },
        ease: Power2.easeIn,
        delay: -1
    })

    developersAnimation.to('.main-services', 1, {
        y: function () {
            var servicesHeight = document.querySelector('.main-services')
            return (servicesHeight.offsetHeight);
        },
        ease: Power2.easeIn,
        delay: -1
    })

    developersAnimation.to('.main-developers', 1, {
        height: "100%",
        width: "100%",
        delay: 0.2,
        ease: Power2.easeOut
    })

    developersAnimation.to('.main-developers', 0.5, {
        opacity: 0,
        ease: Power2.easeIn
    })

    developersAnimation.to('.main-developers', 1, {
        onComplete: function () {
            gotoDevelopersPage();
        }
    }, '-=1.5')

    function gotoDevelopersPage() {
        window.location = "./member.html";
    }
});

// ABOUT US 

aboutusButton.addEventListener('click', function () {

    $('.home-button').css("display", "none");

    developersAnimation.to('.main-works', 1, {
        x: function () {
            var worWidth = document.querySelector('.main-works')
            return (worWidth.offsetWidth);
        },
        ease: Power2.easeIn,
        delay: -.5
    })

    developersAnimation.to('.main-services', 1, {
        y: function () {
            var servicesHeight = document.querySelector('.main-services')
            return (servicesHeight.offsetHeight);
        },
        ease: Power2.easeIn,
        delay: -1
    })

    tl.to('.main-developers', 1, {
        y: function () {
            var devHeight = document.querySelector('.main-developers')
            return -(devHeight.offsetHeight);
        },
        ease: Power2.easeIn,
        delay: -.5
    });

    developersAnimation.to('.main-aboutus', 1, {
        height: "100%",
        width: "100%",
        delay: 0.2,
        ease: Power2.easeOut
    })

    developersAnimation.to('.main-aboutus', 0.5, {
        opacity: 0,
        ease: Power2.easeIn
    })

    developersAnimation.to('.main-aboutus', 1, {
        onComplete: function () {
            gotoDevelopersPage();
        }
    }, '-=1.5')

    function gotoDevelopersPage() {
        window.location = "./about.html";
    }
});

// WORKS

worksButton.addEventListener('click', function () {

    $('.home-button').css("display", "none");

    developersAnimation.to('.main-aboutus', 1, {
        x: function () {
            var aboutusWidth = document.querySelector('.main-aboutus')
            return -(aboutusWidth.offsetWidth);
        },
        ease: Power2.easeIn,
        delay: -.5
    })

    developersAnimation.to('.main-services', 1, {
        y: function () {
            var servicesHeight = document.querySelector('.main-services')
            return (servicesHeight.offsetHeight);
        },
        ease: Power2.easeIn,
        delay: -1
    })

    tl.to('.main-developers', 1, {
        y: function () {
            var devHeight = document.querySelector('.main-developers')
            return -(devHeight.offsetHeight);
        },
        ease: Power2.easeIn,
        delay: -0.5
    });

    developersAnimation.to('.main-works', 1, {
        height: "100%",
        width: "100%",
        delay: 0.2,
        ease: Power2.easeOut
    })

    developersAnimation.to('.main-works', 0.5, {
        opacity: 0,
        ease: Power2.easeIn
    })

    developersAnimation.to('.main-works', 1, {
        onComplete: function () {
            gotoDevelopersPage();
        }
    }, '-=1.5')

    function gotoDevelopersPage() {
        window.location = "./gallery.html";
    }
});

// SKILLS

skillsButton.addEventListener('click', function () {

    $('.home-button').css("display", "none");

    developersAnimation.to('.main-aboutus', 1, {
        x: function () {
            var aboutusWidth = document.querySelector('.main-aboutus')
            return -(aboutusWidth.offsetWidth);
        },
        ease: Power2.easeIn,
        delay: -0.5
    })

    developersAnimation.to('.main-works', 1, {
        x: function () {
            var worWidth = document.querySelector('.main-works')
            return (worWidth.offsetWidth);
        },
        ease: Power2.easeIn,
        delay: -1
    })

    tl.to('.main-developers', 1, {
        y: function () {
            var devHeight = document.querySelector('.main-developers')
            return -(devHeight.offsetHeight);
        },
        ease: Power2.easeIn,
        delay: -0.5
    });

    developersAnimation.to('.main-services', 1, {
        height: "100%",
        width: "100%",
        delay: 0.2,
        ease: Power2.easeOut
    })

    developersAnimation.to('.main-services', 0.5, {
        opacity: 0,
        ease: Power2.easeIn
    })

    developersAnimation.to('.main-services', 1.3, {
        onComplete: function () {
            gotoDevelopersPage();
        }
    }, '-=1.8')

    function gotoDevelopersPage() {
        window.location = "./service.html";
    }
});