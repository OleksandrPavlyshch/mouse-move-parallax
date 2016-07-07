'use strict';
(function () {
});
window.onload = function () {
	var dots = document.getElementsByClassName('background_dot')
		, container = document.getElementById('background');

	var getRandomNumber = function (min, max) {
			return Math.round(Math.random() * (max - min) + min);
		};

	for(var i = 0; i <  dots.length; i++){
		new mouseMoveParralax(container, dots[i], getRandomNumber(2, 5)/4, 'px');
	}
};