let header = document.querySelector('.header-top');
let menu = document.querySelector('.menu');

// Fixed Header
window.onscroll = function showHeader() {
	if (window.pageYOffset > 700) {
		header.classList.add('header-fixed');
		menu.classList.add('header-fixed');
	} else {
		header.classList.remove('header-fixed');
		menu.classList.remove('header-fixed');
	}
}

// Animation burger
document.querySelector('.nav-button').addEventListener('click', function () {
	document.querySelector('.nav-anim').classList.toggle('open-nav');
	document.querySelector('body').classList.toggle('lock');
});

// Placeholder to top
var regionInputWrap = document.querySelector('.region-popup__form-wrap');
var regionInput = document.querySelector('.region-popup__form-input');

regionInputWrap.onclick = function() {
	regionInputWrap.classList.add('placeholder-top');
}
window.addEventListener('click', function (e) {
	if (!regionInputWrap.contains(e.target)) {
		regionInputWrap.classList.remove('placeholder-top');
	}
});

regionInput.onchange = function() {
	if (regionInput.value !== '') {
		window.addEventListener('click', function (e) {
			if (!regionInputWrap.contains(e.target)) {
				regionInputWrap.classList.add('placeholder-top');
			}
		});
	} else {
		window.addEventListener('click', function (e) {
			if (!regionInputWrap.contains(e.target)) {
				regionInputWrap.classList.remove('placeholder-top');
			}
		});
	}
};

$(document).ready(function () {

	// Checkbox
	$.each($('.search-tariffs__checkbox'), function (index, val) {
		if($(this).find('input').prop('checked')==true) {
			$(this).addClass('checkbox-active');
		}
	});
	$(document).on('click', '.search-tariffs__checkbox', function (event) {
		if ($(this).hasClass('checkbox-active')) {
			$(this).find('input').prop('checked', false);
		} else {
			$(this).find('input').prop('checked', true);
		}
		$(this).toggleClass('checkbox-active')

		return false;
	});

});