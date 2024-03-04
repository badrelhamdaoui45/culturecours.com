(function ($) {
	"use strict";

	$('.dropdown-menu > li.nav-item > a.nav-link').addClass('dropdown-item').removeClass('nav-link');
	$('li.mega-menu ul.dropdown-menu').addClass('submenu mega-menu__sub-menu-box');

	// scrollToTop
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		topDistance: '300', // Distance from top before showing element (px)
		topSpeed: 500, // Speed back to top (ms)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 300, // Animation in speed (ms)
		animationOutSpeed: 300, // Animation out speed (ms)
		scrollText: '<i class="fas fa-chevron-double-up"></i>', // Text for element
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	});


	/*------------------------------------
		Mobile Menu
	--------------------------------------*/

	$('#mobile-menu-active').metisMenu();
	$('#mobile-menu-active .has-dropdown.menu-item-has-children > a').on('click', function (e) {
		e.preventDefault();
	});
	$(".hamburger-menu > a").on("click", function (e) {
		e.preventDefault();
		$(".slide-bar").toggleClass("show");
		$("body").addClass("on-side");
		$('.body-overlay').addClass('active');
		$(this).addClass('active');
	});
	$(".close-mobile-menu > a.close-btn").on("click", function (e) {
		e.preventDefault();
		$(".slide-bar").removeClass("show");
		$("body").removeClass("on-side");
		$('.body-overlay').removeClass('active');
		$('.hamburger-menu > a').removeClass('active');
	});

	$('.body-overlay').on('click', function () {
		$(this).removeClass('active');
		$(".slide-bar").removeClass("show");
		$("body").removeClass("on-side");
		$('.hamburger-menu > a').removeClass('active');
	});

	/* Search
		-------------------------------------------------------*/
	var $searchWrap = $('.search-wrap');
	var $navSearch = $('.nav-search');
	var $searchClose = $('#search-close');

	$('.search-trigger').on('click', function (e) {
		e.preventDefault();
		$searchWrap.animate({ opacity: 'toggle' }, 500);
		$navSearch.add($searchClose).addClass("open");
	});

	$('.search-close').on('click', function (e) {
		e.preventDefault();
		$searchWrap.animate({ opacity: 'toggle' }, 500);
		$navSearch.add($searchClose).removeClass("open");
	});

	function closeSearch() {
		$searchWrap.fadeOut(200);
		$navSearch.add($searchClose).removeClass("open");
	}

	$(document.body).on('click', function (e) {
		closeSearch();
	});

	$(".search-trigger, .main-search-input").on('click', function (e) {
		e.stopPropagation();
	});

	//sticky-menu
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 200) {
			$(".main-header-area").removeClass("sticky");
			$(".slide-bar.show").removeClass("slide-bar-sticky");
		} else {
			$(".main-header-area").addClass("sticky");
			$(".slide-bar.show").addClass("slide-bar-sticky");
		}
	});

	// -------------------- Remove Placeholder When Focus Or Click
	$("input,textarea").each(function () {
		$(this).data('holder', $(this).attr('placeholder'));
		$(this).on('focusin', function () {
			$(this).attr('placeholder', '');
		});
		$(this).on('focusout', function () {
			$(this).attr('placeholder', $(this).data('holder'));
		});
	});

	// active-class
	$('.do-box, .s-services').on('mouseenter', function () {
		$(this).addClass('active').parent().siblings().find('.do-box, .s-services').removeClass('active');
	});

	//for menu active class
	$('.portfolio-menu button').on('click', function (event) {
		$(this).siblings('.active').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	});

	// wow animation - start
	//--------------------------------------------------
	function wowAnimation() {
		new WOW({
			offset: 100,
			mobile: true
		}).init()
	}
	wowAnimation();

	$(document).ready(function () {

		//progress-bar
		if ($('.chart1').length) {
			$('.chart1').easyPieChart({
				barColor: '#FF723A',
				trackColor: '#d0d2d5',
				lineWidth: 15,
				lineCap: 'circle',
				scaleColor: 0,
				scaleLength: 0,
				size: 120,
				animate: {
					duration: 2000,
					enabled: true,
				},
			});
		}

		//counter
		if ($('.counter').length) {
			$('.counter').counterUp({
				delay: 10,
				time: 3000
			});
		}

		// course intro video
		if ($('.course-intro-video-popup').length) {
			$('.course-intro-video-popup').magnificPopup({
				type: 'iframe'
			});
		}

	});

})(jQuery);