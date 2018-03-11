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

    function addAnimation(element, addClass, distance) {
		var elemPos;

		$(element).each(function(){
			elemPos = $(this).offset().top;
			
			if(!distance) {
				distance = 1.05;
			}

			var enterPos = $(window).scrollTop() + ($(window).height() / distance);
			if(elemPos < enterPos) {
				$(this).addClass(addClass);
			}
		});
	};

	// Check first
	addAnimation('.drop-in','drop-in--visible');
	addAnimation('.js-fade-in','fade--in');
	addAnimation('.js-slide-left','slide--left');
	addAnimation('.js-slide-right','slide--right');
	addAnimation('.js-slide-in','slide--in', 1.25);
    addAnimation('.js-draw-left','draw--left');
    addAnimation('.js-draw-right','draw--right');

	// Apply on scroll
	$(window).scroll(function() {
		addAnimation('.drop-in','drop-in--visible');
		addAnimation('.js-fade-in','fade--in');
        addAnimation('.js-fade-out','fade--out');
		addAnimation('.js-slide-left','slide--left');
		addAnimation('.js-slide-right','slide--right');
		addAnimation('.js-slide-in','slide--in', 1.25);
        addAnimation('.js-draw-left','draw--left');
        addAnimation('.js-draw-right','draw--right');
	});
	
	// Smooth scroll
	$('.scrollto').click(function(event) {   
	    event.preventDefault();
	    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
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

