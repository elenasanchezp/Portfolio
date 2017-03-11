 jQuery(document).ready(function($) {
 
    $(".scroll a, .backToTop").click(function(event){   
            event.preventDefault();
            $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500,'swing');
            $(".scroll li").removeClass('active');
            $(this).parents('li').toggleClass('active');
        });
    });


 $(window).scroll(function(){

        if ($(this).scrollTop() > 600 && !$('.navbar').hasClass('show-navbar') ) {
            $('.navbar').addClass('show-navbar');
            $('.navbar').slideDown();
        } else if ( $(this).scrollTop() <= 600 ) {
            $('.navbar').removeClass('show-navbar');
            $('.navbar').slideUp();
        }

        if ($(this).scrollTop() > 100) {
            $('.backToTop').fadeIn();
        } else {
            $('.backToTop').fadeOut();
        }
    });

var wow = new WOW(
  {
    boxClass:     'wowload',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true        // act on asynchronously loaded content (default is true)
  }
);
wow.init();

$('.carousel').swipe( {
     swipeLeft: function() {
         $(this).carousel('next');
     },
     swipeRight: function() {
         $(this).carousel('prev');
     },
     allowPageScroll: 'vertical'
 });

