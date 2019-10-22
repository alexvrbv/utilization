"use strict";

$(document).ready(function(){
    slidersInit();
	matchHeightInit();
	mapHeightInit();
});

//Sliders
function slidersInit() {
    $('.chronicle-content__slider-wrapper--1 .chronicle-content__slider-inner').slick({
        dots: false,
        slidesToShow: 7,
        centerMode: true,
        variableWidth: false,
        infinite: true,
        arrows: true,
		prevArrow: $('.chronicle-content__slider-wrapper--1 .chronicle-content__slick-prev'),
        nextArrow: $('.chronicle-content__slider-wrapper--1 .chronicle-content__slick-next'),
    });
    $('.chronicle-content__slider-wrapper--2 .chronicle-content__slider-inner').slick({
        dots: false,
        slidesToShow: 5,
        centerMode: true,
        variableWidth: false,
        infinite: true,
        arrows: true,
		prevArrow: $('.chronicle-content__slider-wrapper--2 .chronicle-content__slick-prev'),
        nextArrow: $('.chronicle-content__slider-wrapper--2 .chronicle-content__slick-next'),
    });
}

//Match height
function matchHeightInit() {
    $('.technical-equipment-item__part').matchHeight();
    $('.event__title-inner').matchHeight();
}

//Map height
function mapHeightInit() {
    $(window).on('load resize', function(){
		var mapHeight = $('.map__content').width()/1.59722222;
		$('.map__content').css('height', mapHeight);
	});
}