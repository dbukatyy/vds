'use strict';

jQuery(document).ready(function () {

	$('.partners-list').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3
			}
		}, {
			breakpoint: 480,
			settings: {
				arrows: false,
				slidesToShow: 2,
				dots: true,
				autoplay: true,
				autoplaySpeed: 2000
			}
		}]
	});

	baguetteBox.run('.sertificates-list,.gallery');

	$('.hamburger').on('click', function () {
		$('.header, .hamburger').toggleClass('active');
	});

	$('.top-line').on('click', function () {
		$('.registration').addClass('active');
	});
	$('.registration').on('click', function () {
		$('.registration').removeClass('active');
	});
});