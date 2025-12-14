"use strict";

// import Swiper from '../libs/swiper/swiper-bundle.min.mjs';
// import JSCCommon from "./JSCCommon.js";

function eventHandler() {
	// const $ = jQuery;
	JSCCommon.init();

	function whenResize() {
		JSCCommon.setFixedNav();
	}

	window.addEventListener(
		"scroll",
		() => {
			JSCCommon.setFixedNav();
		},
		{passive: true}
	);
	window.addEventListener("resize", whenResize, {passive: true});

	whenResize();

	new Swiper(".slider-auto-js", {
		slidesPerView: "auto",
	});

	let defSwipers = document.querySelectorAll(".def-swiper-js");
	for (const defSwiper of defSwipers) {
		new Swiper(defSwiper.querySelector(".swiper"), {
			slidesPerView: "auto",
			spaceBetween: 0,
			initialSlide: 1,
			centeredSlides: true,
			// loop: true,
			// autoHeight: true,
			pagination: {
				el: defSwiper.querySelector(".swiper-pagination"),
				type: "fraction",
			},
			navigation: {
				nextEl: defSwiper.querySelector(".swiper-button-next"),
				prevEl: defSwiper.querySelector(".swiper-button-prev"),
			},
		});
	}
	new Swiper(".def-swiper-js2", {
		slidesPerView: "auto",
		spaceBetween: 0,
		// loop: true,
		// autoHeight: true,
		pagination: {
			el: defSwiper.querySelector(".swiper-pagination"),
			type: "fraction",
		},
		navigation: {
			nextEl: defSwiper.querySelector(".swiper-button-next"),
			prevEl: defSwiper.querySelector(".swiper-button-prev"),
		},
	});

	new Swiper(".centered-swiper-js .swiper", {
		slidesPerView: 1,
		centeredSlides: true,
		spaceBetween: 30,
		loop: true,
		navigation: {
			nextEl: ".centered-swiper-js .swiper-button-next",
			prevEl: ".centered-swiper-js .swiper-button-prev",
		},
	});
}
if (document.readyState !== "loading") {
	eventHandler();
} else {
	document.addEventListener("DOMContentLoaded", eventHandler);
}

// window.onload = function () {
// 	document.body.classList.add('loaded_hiding');
// 	window.setTimeout(function () {
// 		document.body.classList.add('loaded');
// 		document.body.classList.remove('loaded_hiding');
// 	}, 500);
// }
