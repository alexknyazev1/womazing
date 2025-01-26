// STICKY
$(window).on('scroll', function () {
	let scroll = $(window).scrollTop();
	if (scroll < 1) {
		$(".nav-wrapper").removeClass("sticky-bar");
	} else {
		$(".nav-wrapper").addClass("sticky-bar");
	}
});

// HAMBURGER MENU

document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("burger").addEventListener("click", function() {
		document.querySelector("header").classList.toggle("header_active")
	})
});


// SLIDER HEADER

$('.slider-images').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
  asNavFor: '.slider-wrapper',
	autoplay: true,
	autoSpeed: 4000
});
$('.slider-wrapper').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.slider-images',
	arrows: false,
  dots: true,
  centerMode: false,
  focusOnSelect: true
});

// SLIDER TEAM WOMAZING

$('.team-slider').slick({
	arrows: true,
	dots: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoSpeed: 4000,
	dotsClass: 'team-slider__dots',
});

// MODAL WINDOW

$('.call').on('click', function() {
	$('.modal-window__overlay').fadeIn(0);
	$('.modal-window').fadeIn(0);
});

$('.modal-window__overlay').on('click', function() {
	$('.modal-window__overlay').fadeOut(0);
	$('.modal-window').fadeOut(0);
	$('#modal-window__message').fadeOut(0);
});

$('.btn-close__form').on('click', function() {
	$('#modal-window__message').fadeOut(0);
	$('.modal-window__overlay').fadeOut(0);
});

$('.modal-window__btn-close').on('click', function() {
	$('.modal-window__overlay').fadeOut(0);
	$('.modal-window').fadeOut(0);
});

// VALIDATE
$(document).ready(function() {
	$('[data-submit]').on('click', function(e) {
			e.preventDefault();
			$(this).parent('form').submit();
	})
	$.validator.addMethod(
			"regex",
			function(value, element, regexp) {
					var re = new RegExp(regexp);
					return this.optional(element) || re.test(value);
			},
			""
	);

	function valEl(el) {
			el.validate({
					rules: {
							tel: {
									required: true,
									regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$',
							},
							name: {
									required: true,
									regex : "[A-Za-aА-Яа-я]",
							},
							email: {
									required: true,
									email: true
							}
					},
					messages: {
							tel: {
									required: 'Поле обязательно для заполнения',
									regex: 'Телефон может содержать символы + - ()',
							},
							name: {
									required: 'Поле обязательно для заполнения',
									regex: 'Введите имя правильно',
							},
							email: {
									required: 'Поле обязательно для заполнения',
									email: 'Неверный формат E-mail'
							}
					},
					submitHandler: function(form) {
							// $('#loader').fadeIn();
							var $form = $(form);
							var $formId = $(form).attr('id');
							switch ($formId) {
									case 'form':
											$.ajax({
															type: 'POST',
															url: $form.attr('action'),
															data: $form.serialize()
													})
													.done(function() {
															console.log('Success');
													})
													.fail(function() {
															console.log('Fail');
													})
													.always(function() {
															console.log('Always');
															setTimeout(function() {
																	$('#modal-window__message').fadeIn();
																	$('.modal-window').fadeOut();
																	$form.trigger('reset');
																	//строки для остлеживания целей в Я.Метрике и Google Analytics
															}, 700);
															$('#molal-window__message').on('click', function(e) {
																	$(this).fadeOut();
															});

													});
											break;

									case 'contact-form':
											$.ajax({
															type: 'POST',
															url: $form.attr('action'),
															data: $form.serialize()
													})
													.done(function() {
															console.log('Success');
													})
													.fail(function() {
															console.log('Fail');
													})
													.always(function() {
															console.log('Always');
															setTimeout(function() {
																	$('#contact-submit__message').fadeIn();
																	$form.trigger('reset');
																	//строки для остлеживания целей в Я.Метрике и Google Analytics
															}, 700);
															// $('#molal-window__message').on('click', function(e) {
															// 		$(this).fadeOut();
															// });
													});
											break;
							}
							return false;
					}
			})
	}

	// Запускаем механизм валидации форм, если у них есть класс .js-form
	$('.js-form').each(function() {
			valEl($(this));
	});
	
});

// TABS SHOP

$('.tabs__item').on('click', function () {
    let currTab = $(this).index();

    $('.tabs__item').removeClass('tabs__item_active');
    $(this).addClass('tabs__item_active');
});

// TABS ONE PRODUCT SIZE

$('.one-product__size-item').on('click', function () {
    let currTab = $(this).index();

    $('.one-product__size-item').removeClass('one-product__size-item_active');
    $(this).addClass('one-product__size-item_active');
});

// TABS ONE PRODUCT COLORS

$('.one-product__colors-item').on('click', function () {
    let currTab = $(this).index();

    $('.one-product__colors-item').removeClass('one-product__colors-item_active');
    $(this).addClass('one-product__colors-item_active');
});

		