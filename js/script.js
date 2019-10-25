"use strict";

$(document).ready(function(){
    slidersInit();
	matchHeightInit();
	mapHeightInit();
});

//Sliders
function slidersInit() {
    $('.clients-slider__inner').slick({
        dots: true,
        dotsClass: 'clients-slider__nav',
        slidesToShow: 6,
        slidesToScroll: 2,
        infinite: true,
        arrows: true,
		prevArrow: $('.clients-slider__slick-prev'),
        nextArrow: $('.clients-slider__slick-next'),
    });
}

//Match height
function matchHeightInit() {
    $('.technical-equipment-item__part').matchHeight();
    $('.event__title-inner').matchHeight();
    $('.clients-slider-slide').matchHeight();
}

//Map height
function mapHeightInit() {
    $(window).on('load resize', function(){
		var mapHeight = $('.map__content').width()/1.59722222;
		$('.map__content').css('height', mapHeight);
	});
}