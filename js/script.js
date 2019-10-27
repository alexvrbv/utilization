"use strict";

$(document).ready(function(){
    mainMenuDropdownInit();
    homeContentReadmoreInit();
    slidersInit();
	matchHeightInit();
	mapHeightInit();
});

//Main menu dropdown
function mainMenuDropdownInit() {
    var mainMenuTooltipLevelOne = $('.have-children-level-1').each(function() { 
		$(this).qtip({
			content: {
				text: $(this).next('div'),
			},
			position: {
				my: 'top left',
				at: 'bottom left',
				target: $(this),
				adjust: {
					x: -0,
                    y: -0
				},
				container: $('.navbar-nav'),
				viewport: $('body')
			},
			show: {
				event: 'mouseenter',
				solo: false,
                effect: function() {
                    $(this).slideDown(300);
                }
			},
			hide: {
				event: 'mouseleave',
				/*inactive: 5000,*/
                delay: 300,
                fixed: true,
                effect: function() {
                    $(this).slideUp(300);
                }
			},
			style: {
				classes: 'qtip qtip-front',
                tip: {
                    corner: false
                }
			},
			events: {
				show: function(event, api) {
                    $('.have-children-level-1[aria-describedby='+$(this)['0']['id']+']').addClass('active');
				},
				hide: function(event, api) {
                    $('.have-children-level-1[aria-describedby='+$(this)['0']['id']+']').removeClass('active');
				}
			}
		});
    });
    $('.home-top').on('mouseenter', function(){
        setTimeout(function () {
            mainMenuTooltipLevelOne.qtip('hide');
        }, 300);
    });
    var mainMenuTooltipLevelTwo = $('.have-children-level-2').each(function() { 
		$(this).qtip({
			content: {
				text: $(this).next('div'),
			},
			position: {
				my: 'top left',
				at: 'bottom left',
				target: $(this).parent().parent(),
				adjust: {
					x: 0,
                    y: 0
				},
				container: $('.navbar-nav'),
				viewport: $('body')
			},
			show: {
				event: 'mouseenter',
				solo: false,
                delay: 300,
                effect: function() {
                    $(this).slideDown(300);
                }
			},
			hide: {
				//event: 'mouseleave',
                fixed: true,
                effect: function() {
                    $(this).slideUp(300);
                }
			},
			style: {
				classes: 'qtip',
                tip: {
                    corner: false
                }
			},
			events: {
				show: function(event, api) {
                    $('.have-children-level-2[aria-describedby='+$(this)['0']['id']+']').addClass('active');
				},
				hide: function(event, api) {
                    $('.have-children-level-2[aria-describedby='+$(this)['0']['id']+']').removeClass('active');
				}
			}
		});
    });
}

//Home content readmore
function homeContentReadmoreInit() {
    $('.home-content').on('click', '.home-content__readmore', function(){
        if($(this).closest('.home-content--short').length) {
            $(this).closest('.home-content--short').removeClass('home-content--short').addClass('home-content--full');
            $(this).find('span').text('Скрыть');
        } else {
            $(this).closest('.home-content--full').removeClass('home-content--full').addClass('home-content--short');
            $(this).find('span').text('Показать еще');
        }
    });
}

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
    $('.clients-slider-slide').matchHeight();
}

//Map height
function mapHeightInit() {
    $(window).on('load resize', function(){
		var mapHeight = $('.map__content').width()/1.59722222;
		$('.map__content').css('height', mapHeight);
	});
}