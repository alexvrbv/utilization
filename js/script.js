"use strict";

$(document).ready(function(){
    mainMenuDropdownInit();
    mainMenuAccordeonInit();
    contentReadmoreInit();
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
				container: $(this).parent(),
				viewport: $('body')
			},
			show: {
				event: 'mouseenter',
				solo: true,
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
    /*$('.home-top').on('mouseenter', function(){
        setTimeout(function () {
            mainMenuTooltipLevelOne.qtip('hide');
        }, 600);
    });*/
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
				container: $(this).parent(),
				viewport: $('body')
			},
			show: {
				event: 'mouseenter',
				solo: false,
                delay: 300,
                /*effect: function() {
                    $(this).slideDown(300);
                }*/
			},
			hide: {
				event: 'mouseleave',
                fixed: true,
                /*effect: function() {
                    $(this).slideUp(300);
                }*/
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

	//Disable qtips on mobile
	$(window).on("load resize", function() {
		var screenWidth = window.innerWidth;
		if(screenWidth < 768) {
			$('[data-hasqtip]').qtip('hide').qtip('disable');
		} else {
			$('[data-hasqtip]').qtip('enable');
		}
	});
}

//Main menu dropdown
function mainMenuAccordeonInit() {
	$(window).on("load resize", function() {
		var screenWidth = window.innerWidth;
		if(screenWidth < 768) {
			/*$('.header').on('click', '.have-children-level-2', function(e){
				e.preventDefault();
				console.log('111');
				if($(this).hasClass('show-children')) {
					$(this).parent().find('.nav-submenu-level-2').removeClass('show');
					$(this).removeClass('show-children');
				} else {
					$(this).parent().find('.nav-submenu-level-2').addClass('show');
					$(this).addClass('show-children');					
				}
			});*/
			$('.have-children-level-2').on('click', function(e) {
				e.preventDefault();
				console.log('eff');
				$(this).parent().find('.nav-submenu-level-2').toggleClass('show');
			});
		}
	});
}

//Content readmore
function contentReadmoreInit() {
    $('.home-content').on('click', '.home-content__readmore', function(){
        if($(this).closest('.home-content--short').length) {
            $(this).closest('.home-content--short').removeClass('home-content--short').addClass('home-content--full');
            $(this).find('span').text('Скрыть');
        } else {
            $(this).closest('.home-content--full').removeClass('home-content--full').addClass('home-content--short');
            $(this).find('span').text('Показать еще');
        }
    });
    $('.page-content__block--collapsed').on('click', '.page-content__block-readmore', function(){
        $(this).parent().toggleClass('full');
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
		responsive: [
			{
				breakpoint: 1300,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 1080,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false				
				}
			}
		],
    });

    $('.stages-slider__inner').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
		prevArrow: $('.stages-slider__slick-prev'),
        nextArrow: $('.stages-slider__slick-next'),
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 1,
				}
			},
		],
    });

	$('.page-content-slider__inner').each(function(){
		$(this).slick({
			dots: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			arrows: true,
			prevArrow: $('.page-content-slider__slick-prev'),
			nextArrow: $('.page-content-slider__slick-next'),
		});
	});

}

//Match height
function matchHeightInit() {
	setTimeout(function () {
    	$('.clients-slider-slide').matchHeight();
	},300);
}

//Map height
function mapHeightInit() {
    $(window).on('load resize', function(){
		var mapHeight = $('.map__content').width()/1.59722222;
		$('.map__content').css('height', mapHeight);
	});
}