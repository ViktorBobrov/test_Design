let swiper = new Swiper(".mySwiper", {
	spaceBetween: 30,
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
	pagination: {
	  el: ".swiper-pagination",
	},
	mousewheel: true,
	keyboard: true,
 });

 /*бургер меню*/
 const burger = document.querySelector('.burger');
 const nav = document.querySelector('.nav-links');
 
 burger.addEventListener('click', () => {
	nav.classList.toggle('nav-active');
 
	burger.classList.toggle('toggle');
 });