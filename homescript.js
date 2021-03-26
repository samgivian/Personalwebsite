$(function () {
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
        callback: function () { },
        // starting callback function before each string
        preStringTyped: function () { },
        //callback for every typed string
        onStringTyped: function () { },
        // callback for reset
        resetCallback: function () { }
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
var isExpanded = true;

var screen_height = screen.height;

let last_known_scroll_position = 0;
let ticking = false;

var section1_animaton=false;
var section1_height=0

var section2_animaton=false;
var section2_height=0

var section3_animaton=false;

window.addEventListener('scroll', function (e) {
    last_known_scroll_position = window.scrollY + 0;
   // console.log(last_known_scroll_position)
    if (!ticking) {
        window.requestAnimationFrame(function () {
            if ($(window).scrollTop() > navHeight) {
                $('.aa-nav').addClass('aa-small-nav');
                $('.aa-nav-items').addClass('aa-small-nav-items');
                $('.aa-hamburger-menu').addClass('aa-small-hamburger-menu');
                $('.aa-nav-item > a').css('color', 'black');
                $('.aa-nav ').css('background-color', 'rgba(28, 48, 74,0.95)');
                isExpanded = false;
            }
            if ($(window).scrollTop() < navHeight) {
                $('.aa-nav ').css('background-color', 'transparent')
                $('.aa-nav ').removeClass('aa-small-nav')
            }
            if ($(window).scrollTop() > navHeight)
                if (!isExpanded && $(window).scrollTop() < navHeight) {
                    $('.aa-nav').removeClass('aa-small-nav');
                    $('.aa-nav-items').removeClass('aa-small-nav-items');
                    $('.aa-hamburger-menu').removeClass('aa-small-hamburger-menu');
                    $('.aa-nav-item > a').css('color', 'black');
                    $('.aa-nav ').css('background-color', 'transparent ');
                    isExpanded = true;
                }
            ticking = false;
            if (last_known_scroll_position > screen_height / 7 && section1_animaton==false) {
                section1_animaton=true;
                d = document.getElementById("id-h-about-p");
                d.style.display = "block";
                d.className += " h-about-animation-p"; 
                section1_height=$(".section1").height();
            }
            console.log(last_known_scroll_position);
            console.log((screen_height/5.5)+section1_height+section2_height)
            
            if(last_known_scroll_position>(screen_height/5.5)+section1_height && section1_animaton==true && section2_animaton==false) {
              
                section2_animaton==true;
                d = document.getElementById("id-h-about-p-2");
                d.style.display = "block";
                d.className += " h-about-animation-p-2"; 
                section2_height=$(".section2").height();
            }

            if(last_known_scroll_position>((screen_height/5.5)+section1_height+section2_height) ) {
              
                section3_animaton==true;
                d = document.getElementById("id-h-about-p-3");
                d.style.display = "block";
                d.className += " h-about-animation-p-3"; 
            
            }
            
        });

        ticking = true;
    }
});
