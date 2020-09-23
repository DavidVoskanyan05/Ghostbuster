jQuery(document).ready(function() {
	const Mmenubtn = $(".m-menu-button");
	const Mmenu = $(".m-menu");
	const tab = $(".tab");

	tab.on('click',function() {
		tab.removeClass('active');
		$(this).toggleClass('active');

		let tabclasscont = $(this).attr('data-target');
		$(".tabs-content").removeClass('visible');
		$(tabclasscont).toggleClass('visible');
	});
	Mmenubtn.on('click', function() {
		
		Mmenu.toggleClass('active');
		$("body").toggleClass('no-scroll');

	});

	var mySwiper = new Swiper ('.swiper-container', {
    	loop: true,
    	slidesPerView: 4,
    	spaceBetween:25,
    	breakpoints: {
    		992: {
    			slidesPerView: 4,
    		},

    		768: {
    			slidesPerView: 2,
    		},
    		320: {
    			slidesPerView: 1,
    			 navigation: {
    				nextEl: '.button-next',
 
  				},
    		},
    	},
  	});
});