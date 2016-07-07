'use strict';
window.onload = function () {
	var dots = document.getElementsByClassName('background_dot')
		, container = document.getElementById('background');

	var getRandomNumber = function (min, max) {
			return Math.round(Math.random() * (max - min) + min);
		};

	for(var i = 0; i <  dots.length; i++){
		new mouseMoveParralax({
			container: container
			, element: dots[i]
			, braking: getRandomNumber(2, 20)/10
			, units: 'px'
		});
	}
};