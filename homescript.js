$(function(){
	$(".typewriter").typed({
		strings: ["Student at ... ", " Software Engineer.", "Nice to meet you."],
		// optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1500,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 1000,
		// loop
		loop: true,
		// false = infinite
		loopCount: false,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
    $(".icon-bar").fadeIn(1500);
    $(".introduction").fadeIn(1500);
});

function toggleMenu() {
    $("#hamburgerMenu").toggleClass("collapsed");
    $(".aa-mobile-overlay").animate({
        height: "toggle",
        opacity: "toggle"
    }, 300);
}

var navHeight = 90;
var scrollNavHeight = 65;
var isExpanded = true;

let last_known_scroll_position = 0;
let ticking = false;
function doSomething(scroll_pos) {
    // Do something with the scroll position
}
window.addEventListener('scroll', function (e) {
    last_known_scroll_position = window.scrollY + 0;

    if (!ticking) {
        window.requestAnimationFrame(function () {
            $('.scroll-animations .animated').each(function () {
                if (isScrolledIntoView(this) === true) {
                    $(this).addClass('in-left2');
                    $(".new-section").css("visibility", "visible");
                    $('.new-section').addClass('in-left2');
                }
            });


            $('.center-div').each(function () {
                if (isScrolledIntoView(this) === true) {
                    $(this).css("visibility", "visible");
                    $(this).addClass('bounceInDown1');
                }
            });
            $('.skill-percent').each(function () {
                // animate
                if (isScrolledIntoView(this) === true) {
                    $(this).animate({
                        //finds the width from the data-percent attribute
                        width: $(this).data('percent') + '%'
                    }, 2000);
                }
            });

            if ($(window).scrollTop() > navHeight) {
                $('.aa-nav').addClass('aa-small-nav');
                $('.aa-nav-icon').addClass('aa-small-nav-icon');
                $('.aa-nav-items').addClass('aa-small-nav-items');
                $('.aa-hamburger-menu').addClass('aa-small-hamburger-menu');
                $('.aa-nav-item > a').css('color', 'black');
                $('.aa-nav ').css('background-color', '#3e78b2');
                isExpanded = false;
            }

            if (!isExpanded && $(window).scrollTop() < navHeight) {
                $('.aa-nav').removeClass('aa-small-nav');
                $('.aa-nav-icon').removeClass('aa-small-nav-icon');
                $('.aa-nav-items').removeClass('aa-small-nav-items');
                $('.aa-hamburger-menu').removeClass('aa-small-hamburger-menu');
                $('.aa-nav-item > a').css('color', 'black');
                $('.aa-nav ').css('background-color', 'transparent ');
                isExpanded = true;
            }
            ticking = false;
        });

        ticking = true;
    }
});
