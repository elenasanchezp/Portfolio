    jQuery(document).ready(function($) {
    
        $(".scroll a, .backToTop").click(function(event){   
                event.preventDefault();
                $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500,'swing');
                $(".scroll li").removeClass('active');
                $(this).parents('li').toggleClass('active');
        }); 

        $(".js-flex-item").click(function (event) {
            event.preventDefault();
            $itemId = $(this).attr('id'); 
            //$container = $( "div[id='" + $itemId  + "_container']"); 
            //$container.slideToggle(1000, 'swing');
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

