"use strict";

$(document).ready(function(){
    mainMenuDropdownInit();
    mainMenuAccordeonInit();
    contentReadmoreInit();
    slidersInit();
	popupsInit();
	geographyMapInit();
	matchHeightInit();
	historySliderPopupsInit();
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
			$('.have-children-level-1[data-hasqtip]').qtip('hide').qtip('disable');
			$('.have-children-level-2[data-hasqtip]').qtip('hide').qtip('disable');
		} else {
			$('.have-children-level-1[data-hasqtip]').qtip('enable');
			$('.have-children-level-2[data-hasqtip]').qtip('enable');
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
    $('.clients-slider__inner:not(.clients-slider__inner--partners)').slick({
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

    $('.clients-slider__inner--partners').slick({
        dots: false,
        dotsClass: 'clients-slider__nav',
        slidesToShow: 7,
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

	$('.history-slider__inner').on('init', function(){
		setTimeout(function () {
			$('.slick-current .history-slider-slide__inner').trigger('click');
		},300);
	});    
	$('.history-slider__inner').slick({
        dots: false,
        slidesToShow: 13,
        slidesToScroll: 1,
        infinite: true,
		centerMode: true,
        arrows: true,
		prevArrow: $('.history-slider__slick-prev'),
        nextArrow: $('.history-slider__slick-next'),
		responsive: [
			{
				breakpoint: 1300,
				settings: {
					slidesToShow: 9,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 1080,
				settings: {
					slidesToShow: 7,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 3,
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
	$('.history-slider__inner').on('afterChange', function(){
		$('.slick-current .history-slider-slide__inner').trigger('click');
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

//Popups
function popupsInit() {
    $('.licenses__list').each(function() { // the containers for all your galleries
        $(this).magnificPopup({
            delegate: '.license__img-open', // the selector for gallery item
            type: 'image',
            gallery: {
                enabled:true
            }
        });
    });
}

//Contacts map
var partners = [
	{
		center: [59.773827, 30.005634],
		title: "Кусино 1",
		description: "Brent Conrad talks with everyone from"

	},
	{
		center: [59.733637, 30.873554],
		title: "Кусино 2",
		description: "Brent Conrad talks with everyone from"
	},
	{
		center: [59.387956, 31.826618],
		title: "Кусино 3",
		description: "Brent Conrad talks with everyone from"
	},
	{
		center: [59.586322, 32.425373],
		title: "Кусино 4",
		description: "Brent Conrad talks with everyone from"
	}
	
];

function geographyMapInit() {
	if (typeof ymaps != "undefined") {
		ymaps.ready(init);
	}
    function init(){
        // Создание карты.
        var geographyMap = new ymaps.Map("geography-map", {
            center: [59.634331, 31.240832],
            zoom: 9
        });

		var iconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div class="geography-map__icon"></div>'
        );
		var iconContentLayoutHover = ymaps.templateLayoutFactory.createClass(
            '<div class="geography-map__icon geography-map__icon--hover"></div>'
        );

        // Создание макета балуна
        var MyBalloonLayout = ymaps.templateLayoutFactory.createClass(
			'<div class="geography-map__balloon popover top">' +
			'<a class="close" href="#">&times;</a>' +
			'<div class="arrow"></div>' +
			'<div class="popover-inner">' +
			'$[[options.contentLayout observeSize minWidth=180 maxWidth=180 maxHeight=550]]' +
			'</div>' +
			'</div>', {
			/**
			 * Строит экземпляр макета на основе шаблона и добавляет его в родительский HTML-элемент.
			 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#build
			 * @function
			 * @name build
			 */
			build: function () {
				this.constructor.superclass.build.call(this);

				this._$element = $('.popover', this.getParentElement());

				this.applyElementOffset();

				this._$element.find('.close')
					.on('click', $.proxy(this.onCloseClick, this));
			},

			/**
			 * Удаляет содержимое макета из DOM.
			 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#clear
			 * @function
			 * @name clear
			 */
			clear: function () {
				this._$element.find('.close')
					.off('click');

				this.constructor.superclass.clear.call(this);
			},

			/**
			 * Метод будет вызван системой шаблонов АПИ при изменении размеров вложенного макета.
			 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
			 * @function
			 * @name onSublayoutSizeChange
			 */
			onSublayoutSizeChange: function () {
				MyBalloonLayout.superclass.onSublayoutSizeChange.apply(this, arguments);

				if(!this._isElement(this._$element)) {
					return;
				}

				this.applyElementOffset();

				this.events.fire('shapechange');
			},

			/**
			 * Сдвигаем балун, чтобы "хвостик" указывал на точку привязки.
			 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
			 * @function
			 * @name applyElementOffset
			 */
			applyElementOffset: function () {
				this._$element.css({
					left: -(this._$element[0].offsetWidth / 2),
					top: -(this._$element[0].offsetHeight + this._$element.find('.arrow')[0].offsetHeight)
				});
			},

			/**
			 * Закрывает балун при клике на крестик, кидая событие "userclose" на макете.
			 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
			 * @function
			 * @name onCloseClick
			 */
			onCloseClick: function (e) {
				e.preventDefault();

				this.events.fire('userclose');
			},

			/**
			 * Используется для автопозиционирования (balloonAutoPan).
			 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/ILayout.xml#getClientBounds
			 * @function
			 * @name getClientBounds
			 * @returns {Number[][]} Координаты левого верхнего и правого нижнего углов шаблона относительно точки привязки.
			 */
			getShape: function () {
				if(!this._isElement(this._$element)) {
					return MyBalloonLayout.superclass.getShape.call(this);
				}

				var position = this._$element.position();

				return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([
					[position.left, position.top], [
						position.left + this._$element[0].offsetWidth,
						position.top + this._$element[0].offsetHeight + this._$element.find('.arrow')[0].offsetHeight
					]
				]));
			},

			/**
			 * Проверяем наличие элемента (в ИЕ и Опере его еще может не быть).
			 * @function
			 * @private
			 * @name _isElement
			 * @param {jQuery} [element] Элемент.
			 * @returns {Boolean} Флаг наличия.
			 */
			_isElement: function (element) {
				return element && element[0] && element.find('.arrow')[0];
			}
        });

		geographyMap.controls.remove('searchControl');
		partners.forEach(partner => {
			var myPlacemark = new ymaps.Placemark(partner.center, {
				hintContent: partner.title,
            	balloonContent: '<div class="geography-map__balloon-inner">\
				<div class="geography-map__balloon-title">\
				' + partner.title + '\
				</div>\
				<div class="geography-map__balloon-description">\
				' + partner.description + '\
				</div>',
			}, {
				iconLayout: 'default#imageWithContent',
				iconContentLayout: iconContentLayout,
				iconImageHref: '',
				iconImageSize: [40, 40],
            	iconImageOffset: [0, 0],
            	iconContentOffset: [0, 0],
				hideIconOnBalloonOpen: false,
				balloonLayout: MyBalloonLayout,
				balloonOffset: [20, -10],
			});
			geographyMap.geoObjects.add(myPlacemark);
			myPlacemark.events
				.add('mouseenter', function (e) {
					e.get('target').options.set({
						iconContentLayout: iconContentLayoutHover,
					});
				})
				.add('mouseleave', function (e) {
					e.get('target').options.set({
						iconContentLayout: iconContentLayout,
					});
				});
		});
	}
}


//Match height
function matchHeightInit() {
	setTimeout(function () {
    	$('.clients-slider-slide').matchHeight();
	},300);
}

//History slider popups
function historySliderPopupsInit() {
    var historySliderPopup = $('.history-slider-slide__inner').each(function() { 
		$(this).qtip({
			content: {
				text: $(this).next('div'),
				button: 'Закрыть',
			},
			position: {
				my: 'center left',
				at: 'center right',
				target: $(this),
				adjust: {
					x: -0,
                    y: -0
				},
				container: $('.history-slider-wrapper'),
				viewport: $('body')
			},
			show: {
				event: 'click',
				solo: true,
			},
			hide: {
				event: 'unfocus',
				/*inactive: 5000,*/
                delay: 300,
                fixed: true,
			},
			style: {
				classes: 'qtip qtip--history-slide',
                tip: {
                    corner: false
                }
			},
			events: {
				show: function(event, api) {
                    
				},
				hide: function(event, api) {
                   
				}
			}
		});
    });
}