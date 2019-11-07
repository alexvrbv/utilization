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
	$(window).on("load resize", function() {
		var screenWidth = window.innerWidth;
		if(screenWidth > 767) {
			$(".have-children-level-1").hoverIntent({
				over: function over() {
					$(this).next('.nav-submenu-level-1').addClass('visible');
					$(this).addClass('active');
				},
				out: function out() {
					$(this).next('.nav-submenu-level-1').removeClass('visible');
					$(this).removeClass('active');
				},
				timeout: 500
			});
			$(".nav-submenu-level-1").hoverIntent({
				over: function over() {
					$(this).addClass('visible-when-hover');
					$(this).parent('li').find('.have-children-level-1').addClass('active-when-hover');
				},
				out: function out() {
					$(this).removeClass('visible-when-hover');
					$(this).parent('li').find('.have-children-level-1').removeClass('active-when-hover');
				},
				timeout: 500
			});
			$(".have-children-level-2").hoverIntent({
				over: function over() {
					$(this).next('.nav-submenu-level-2').addClass('visible');
					$(this).addClass('active');
				},
				out: function out() {
					$(this).next('.nav-submenu-level-2').removeClass('visible');
					$(this).removeClass('active');
				},
				timeout: 400
			});
			$(".nav-submenu-level-2").hoverIntent({
				over: function over() {
					$(this).addClass('visible-when-hover');
					$(this).parent('li').find('.have-children-level-2').addClass('active-when-hover');
				},
				out: function out() {
					$(this).removeClass('visible-when-hover');
					$(this).parent('li').find('.have-children-level-2').removeClass('active-when-hover');
				},
				timeout: 400
			});
		} else {
			$(".have-children-level-1").unbind("mouseenter").unbind("mouseleave");
			$(".nav-submenu-level-1").unbind("mouseenter").unbind("mouseleave");
			$(".have-children-level-2").unbind("mouseenter").unbind("mouseleave");
			$(".nav-submenu-level-2").unbind("mouseenter").unbind("mouseleave");
		}
	});
}

//Main menu accordeon
function mainMenuAccordeonInit() {
	$(window).on("load resize", function() {
		var screenWidth = window.innerWidth;
		if(screenWidth < 768) {
			$('.have-children-level-2').unbind('click');
			$('.have-children-level-2').on('click', function(e) {
				e.preventDefault();
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