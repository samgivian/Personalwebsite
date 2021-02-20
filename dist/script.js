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

$(window).scroll(function() {
  if ($(window).scrollTop() > navHeight) {
    $('.aa-nav').addClass('aa-small-nav');    
    $('.aa-nav-icon').addClass('aa-small-nav-icon');
    $('.aa-nav-items').addClass('aa-small-nav-items');
    $('.aa-hamburger-menu').addClass('aa-small-hamburger-menu');
    $('.aa-nav-item > a').css('color', 'black');
    isExpanded = false;
  }
  
  if (!isExpanded && $(window).scrollTop() < navHeight) {
    $('.aa-nav').removeClass('aa-small-nav');    
    $('.aa-nav-icon').removeClass('aa-small-nav-icon');
    $('.aa-nav-items').removeClass('aa-small-nav-items');
    $('.aa-hamburger-menu').removeClass('aa-small-hamburger-menu');
    $('.aa-nav-item > a').css('color', 'white');
    isExpanded = true;
  }
  
});

// $('#searchBtn').click(function() {
//   $('.nav-item').toggle();
//   $('.search').toggleClass('hide');
// });

// $(document).scroll(function () {
//   var $nav = $(".navbar-fixed-top");
//   $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
// });