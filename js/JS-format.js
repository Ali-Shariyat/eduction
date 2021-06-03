
/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function (b, c) { var $ = b.jQuery || b.Cowboy || (b.Cowboy = {}), a; $.throttle = a = function (e, f, j, i) { var h, d = 0; if (typeof f !== "boolean") { i = j; j = f; f = c } function g() { var o = this, m = +new Date() - d, n = arguments; function l() { d = +new Date(); j.apply(o, n) } function k() { h = c } if (i && !h) { l() } h && clearTimeout(h); if (i === c && m > e) { l() } else { if (f !== true) { h = setTimeout(i ? k : l, i === c ? e - m : e) } } } if ($.guid) { g.guid = j.guid = j.guid || $.guid++ } return g }; $.debounce = function (d, e, f) { return f === c ? a(d, e, false) : a(d, f, e !== false) } })(this);



$(function () {
    window.responsive = function responsive() {

        if ($(window).width() <= 600) {

            $(".show-content-parent").insertBefore(".side-bar-video")
        } else if ($(window).width() >= 600) {
            $(".show-content-parent").insertAfter(".side-bar-video")

        }

        $("footer").css("margin-bottom", $(".end-fixed").outerHeight())
        $(document).ready(function () {
            $(".menu").append("<div class='rain'></div>");

            if ($(".rain")[0]) {

                $(".rain").css("width", $(".menu li.active-menu").innerWidth())
                $(".rain").css("left", $(".menu li.active-menu").position().left)
            }
            $(".menu li.tab-menu").hover(function () {
                var $rain_w = $(this)
                $(".rain").css("width", $rain_w.innerWidth())
                $(".rain").css("left", $rain_w.position().left)
            })
            $(".menu").mouseleave(function () {
                $(".rain").css("width", $(".menu li.active-menu").innerWidth())
                $(".rain").css("left", $(".menu li.active-menu").position().left)
            })
            $('.modal').modal({
                dismissible: true, // Modal can be dismissed by clicking outside of the modal
                opacity: .8, // Opacity of modal background
                inDuration: 300, // Transition in duration
                outDuration: 200, // Transition out duration
                startingTop: '4%', // Starting top style attribute
                endingTop: '10%',
            }
         );
            $('#modal1').modal({
                dismissible: true, // Modal can be dismissed by clicking outside of the modal
                opacity: .8, // Opacity of modal background
                inDuration: 300, // Transition in duration
                outDuration: 200, // Transition out duration
                startingTop: '4%', // Starting top style attribute
                endingTop: '35%',
            }
         );
            $(".top-down").click(function () {
                $("html,body").animate({
                    scrollTop: $(".parallax-container").outerHeight()
                }, 1000)
            })
            if ($(window).width() > 600) {


                $(".parallax-container").height($(window).height())
                $(".sidebar-courses").height($(".content-courses").outerHeight());
                $(window).scroll(function () {
                    $(".sidebar-courses").height($(".content-courses").outerHeight());
                })
                if ($(".sticky-courses")[0]) {
                    $(".sticky-courses").sidebarFix({
                        frame: $('.sidebar-courses'),
                        topBuffer: 150
                    });
                }
            } else if ($(window).width() < 600) {
                $(".sidebar-courses").css("height", "");
            } else {
            }
            $(".tab-menu,.down-menu-l").hover(function () {
                $(this).children(".down-menu-l").stop().fadeIn()
            })
            $(".tab-menu,.down-menu-l").mouseleave(function () {
                $(this).children(".down-menu-l").stop().fadeOut()
            });

            $(".down-menu-l > li,.sup-menu").hover(function () {
                $(this).children(".sup-menu").stop().fadeIn()
            })
            $(".down-menu-l > li,.sup-menu").mouseleave(function () {
                $(this).children(".sup-menu").stop().fadeOut()
            })

            $(".show-content,.show-content-parent,.side-bar-video").height($(window).height() - $(".body-search-inter").height())
            //$('#tabs-swipe-demo').tabs({ swipeable: true });
            //$(".tab-login li").click(function () {
            //    $(".change-div-login li:first").animate({"margin-right": -$(".change-div-login-parent li").width()})
            //})
            $(".tab-login").append('<div class="rain-modal2"></div>')
            $('.change-div-login').addClass("change-div-login-adding").css("margin-right", "0px")
            function a() {
                var tmb = $(".tab-login li");
                function setSlide(i) {
                    $('.change-div-login').css({ 'margin-right': -i * $('.change-div-login-parent').width() }, 500);
                    tmb.removeClass("active-login").eq(i).addClass("active-login")
                }
                tmb.click(function () {
                    setSlide($(this).index());
                });
            }
            $(".text-menu-login").click(function () {
                a()
                setTimeout(function () {
                    $(".change-div-login li").css("width", $(".change-div-login-parent").outerWidth())
                    $(".rain-modal2").width($(".active-modal2").outerWidth())
                })
            })
        });
        $(".tab-login li").click(function () {
            var $rain_w = $(this)
            $(".rain-modal2").css("width", $rain_w.outerWidth())
            $(".rain-modal2").animate({ "left": $rain_w.position().left })
        })
        $(".icon-search-s").click(function () {
            $(".search-box").addClass("search-box-add");
            $(".black-click").fadeIn();
            $(".menu-icon").css("z-index", "0");
            $("body").css("overflow", "hidden")

        })






        var $time_for_animate = 700;
        $(".black-click").click(function () {
            $(".search-box").removeClass("search-box-add")
            $(".black-click").fadeOut();
            $(".menu-icon span,.menu-icon").removeAttr("style");

            $("body,.header-fixed-add").css({
                left: 0
            });
            $(".menu-s").css({
                right: -253
            });
            $("body").css("overflow", "")
            t = 1;
            fix_position()
        })
        function fix_position() {
            setTimeout(function () {
                $("body").css({
                    "position": ""
                })
            }, 1000)
        }
        var t = 1;
        $(".menu-icon").click(function () {
            if (t == 1) {
                $(".menu-icon span:nth-child(1)").css({
                    transform: "rotate(-45deg) translate(-6px, 6px)",
                })
                $(".menu-icon span:nth-child(2)").css({
                    opacity: 0
                })
                $(".menu-icon span:nth-child(3)").css({
                    transform: "rotate(45deg) translate(-5px, -4px)",
                })
                $("body,.header-fixed-add").css({
                    left: -253
                });
                $("body").css({
                    "position": "fixed"
                })
                $(".menu-s").css({
                    right: 0
                })
                $(".black-click").fadeIn()
                $("body").css("overflow", "hidden")

                t = 2;


            } else if (t == 2) {
                $(".menu-icon span").removeAttr("style");
                fix_position()
                $("body,.header-fixed-add").css({
                    left: 0
                });
                $(".menu-s").css({
                    right: -253
                });
                $(".black-click").fadeOut()
                t = 1;
                $("body").css("overflow", "")

            }
        })
        $(".text-menu-s").click(function () {
            $(this).parent().children("ul").stop().slideToggle("slow")
            $(this).parent().children("div").children("svg").stop().toggleClass("transform-svg")
        })
        $(window).load(function () {
            setTimeout(function () {
                $(".page-loader").fadeOut()
            }, 1000)
        })
    }

    //Call the function on load and resize
    $(window).on('ready load resize orientationchange', function () { responsive(); });
});



/*////////////////////////////////////not - in responsive ///////////////////////////////////////////////*/

$(".my-carusel").slick({
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    rtl: true,
    prevArrow: ".click-left",
    nextArrow: ".click-right",
    responsive: [
{
    breakpoint: 1024,
    settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false
    }
},
{
    breakpoint: 600,
    settings: {
        slidesToShow: 1,
        slidesToScroll: 1
    }
},
{
    breakpoint: 480,
    settings: {
        slidesToShow: 1,
        slidesToScroll: 1
    }
}
    ]
})


$(".my-carusel-news").slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    rtl: true,
    prevArrow: ".click-left-news",
    nextArrow: ".click-right-news",
    responsive: [
{
    breakpoint: 1024,
    settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false
    }
},
{
    breakpoint: 600,
    settings: {
        slidesToShow: 1,
        slidesToScroll: 1
    }
},
{
    breakpoint: 480,
    settings: {
        slidesToShow: 1,
        slidesToScroll: 1
    }
}
    ]
})


$(".carousel").carousel()
$(".prev-teacher").click(function () {
    $(".carousel").carousel("prev", 1)
})
$(".next-teacher").click(function () {
    $(".carousel").carousel("next", 1)
})


/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||contdown|||||||||||timer||||||||||||||||||||||||*/
if ($(".countdown")[0]) {
    $('.countdown').ClassyCountdown({
        theme: "white",
        end: $.now() + 172800,
        labelsOptions: {
            lang: {
                days: 'روز',
                hours: 'ساعت',
                minutes: 'دقیقه',
                seconds: 'ثانیه'
            },
            style: 'font-size: 15px;',
        },
        style: {
            element: '',
            textResponsive: 0.3,
            days: {
                gauge: {
                    thickness: 0.03,
                    bgColor: "#fff",
                    fgColor: "#f00"
                },
                textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#fff;'
            },
            hours: {
                gauge: {
                    thickness: 0.03,
                    bgColor: "#fff",
                    fgColor: "#f00"
                },
                textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#fff;'
            },
            minutes: {
                gauge: {
                    thickness: 0.03,
                    bgColor: "#fff",
                    fgColor: "#f00"
                },
                textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#fff;'
            },
            seconds: {
                gauge: {
                    thickness: 0.03,
                    bgColor: "#fff",
                    fgColor: "#f00"
                },
                textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#fff;'
            }
        }
    });
}
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||contdown|||||||||||timer||||end||||||||||||||||||||*/

/*منوی فیکس*/

$(".hover-menu-l").hover(function () {
    $(".header-fixed").css({
        top: 0
    })
})
var i = 0;
var $header_parent = $(".header-fixed").outerHeight() + 20;
$(window).scroll(function () {
    var $scroll_window = $(window).scrollTop();

    if ($(".register-attach .parallax-img")[0]) {
        $(".parallax-container .parallax-img").css("transform", "translate3d(0%," + $scroll_window / 2 + "px" + ", 0px)")
        $(".register-attach .parallax-img").css("transform", "translate3d(0%," + ($scroll_window - $(".register-attach").offset().top) / 2 + "px" + ", 0px)")
    }
    if ($(window).scrollTop() > 2 * ($header_parent)) {
        $(".header-fixed").css({
            top: 0
        })
        if ($scroll_window > i) {
            $(".header-fixed").css({
                top: -$header_parent
            });
        }
        i = $scroll_window;
    }
    if ($(window).scrollTop() > $header_parent - 50) {
        $(".header-fixed").addClass("back-menu-add")
        $(".menu a,.icon-search i").css("color", "#000");
        $(".logo").addClass("logo-add-wid").removeClass("logo")
    }
    else {
        $(".header-fixed").css({
            top: 0
        }).removeClass("back-menu-add");
        $(".menu a,.icon-search i").removeAttr("style");
        $(".logo-add-wid").addClass("logo").removeClass("logo-add-wid");

    }
})
/*پایان منوی فیکس*/

$(".rating li").hover(function () {
    if ($(".rating li").hasClass("adding-rating")) {


    } else {
        $(this).prevAll().find(".full").css("display", "block")
        $(this).prevAll().find(".boreder").css("display", "none")
        $(this).find(".boreder").css("display", "none");
        $(this).find(".full").css("display", "block")
        $(this).nextAll().find(".full").css("display", "none")
        $(this).nextAll().find(".boreder").css("display", "block");
    }
})

$(".rating li").mouseleave(function () {
    if ($(".rating li").hasClass("adding-rating")) {

    } else {
        $(".rating li").find(".boreder").removeAttr("style")
        $(".rating li").find(".full").removeAttr("style")
    }
})
var $click_rating = 1;
$(".rating li").on("click", function () {
    $(".course-rating").addClass("parent-sub-block").siblings().removeClass("parent-sub-block");
    $(".rat-tab").addClass("line-tab").siblings().removeClass("line-tab")
    $("html,body").animate({
        scrollTop: $(".Score-course").offset().top
    }, 1000)
    if ($click_rating == 1) {
        $(".rating li").addClass("adding-rating")
        $(this).prevAll().find(".full").css("display", "block")
        $(this).prevAll().find(".boreder").css("display", "none")
        $(this).find(".boreder").css("display", "none");
        $(this).find(".full").css("display", "block")
        $(this).nextAll().find(".full").css("display", "none")
        $(this).nextAll().find(".boreder").css("display", "block");


        $click_rating = 2;
    }


});



var $information = $(".information > li")
var $information_tab = $(".information-tab li")
function activing_two(i) {
    $information.removeClass("parent-sub-block").eq(i).addClass("parent-sub-block");
    $information_tab.removeClass("line-tab").eq(i).addClass("line-tab");
}
$(".information-tab li").click(function () {
    activing_two($(this).index());
    $(".sidebar-courses").height($(".content-courses").outerHeight());
})


$(".education-plan").each(function () {
    var q = $(this);
    $(this).children(".coll-header").children(".number-of-coll-body").text("0/" + q.children(".coll-body").children("ul").children("li").length)
})
$(".number-of-coll-body").text()
$(".education-plan div:first-child").click(function () {
    $(".sidebar-courses").height($(".content-courses").outerHeight());
    var tt = $(this).parent().attr("data-status");
    if (tt == 1) {
        $(this).parent().children(".coll-body").stop().slideDown();

        $(this).parent().nextAll().children(".coll-body").slideUp();
        $(this).parent().prevAll().children(".coll-body").slideUp();

        $(this).parent().prevAll().attr("data-status", "1");
        $(this).parent().nextAll().attr("data-status", "1");
        $(this).children("svg").removeClass("adding-svg-education")
        $(this).parent().nextAll().children("div:first-child").children("svg").removeClass("adding-svg-education")
        $(this).parent().prevAll().children("div:first-child").children("svg").removeClass("adding-svg-education")


        $(this).children("svg").addClass("adding-svg-education")


        $(this).parent().attr("data-status", "2");
    } else if (tt == 2) {
        $(this).parent().children(".coll-body").stop().slideUp();
        $(this).children("svg").removeClass("adding-svg-education")
        $(this).parent().attr("data-status", "1");
    }
})
$(".education-plan div:first-child").click(function () {

})
//archive////////////////////////////////////////////////////////////////
$(".view_list-content").click(function () {
    $(".view_list").fadeIn();
    $(".view_module").fadeOut();
    $(".view_list-content").addClass("active-arcive");
    $(".view_modul-content").removeClass("active-arcive");
})
$(".view_modul-content").click(function () {
    $(".view_module").fadeIn();
    $(".view_list").fadeOut();
    $(".view_modul-content").addClass("active-arcive");
    $(".view_list-content").removeClass("active-arcive");
})
//archive////////////////////////////////////////////////////////////////

$(".one-show").click(function () {
    $(".show-content").fadeIn()
});

var iframe = $(".show-content > ul li")
function activing_three(i) {
    iframe.removeClass("iframe-display").eq(i).addClass("iframe-display");
}

$(".coll-body ul > li > .one-show").click(function () {
    activing_three($(this).parent().index());
})


$(".one-show").click(function () {
    $("video").each(function () {
        $(this).get(0).pause();
    });
})


$(".information .btn").click(function () {
    $(".video-parent-fixed").show();
    $("body").css("overflow", "hidden");
})
$(".close-inter").click(function () {
    $(".video-parent-fixed").hide()
    $("body").css("overflow", "")
})

$(".icon-search,.text-menu-login").click(function () {
    $("body").addClass("fix-pop")
})















var $setti = 1;
$(".btn-setting").click(function () {
    if ($setti == 1) {

        $(".settings").css({
            right: 0,
            transition: "all 1s"
        })
        $setti = 2;
    }


    else if ($setti == 2) {
        $(".settings").css({
            right:-300,
            transition: "all 1s"
        })
        $setti = 1;
    }

})
