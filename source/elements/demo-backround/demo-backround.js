'use strict';
window.onload = function () {
	var dots = document.getElementsByClassName('background_dot')
		, container = document.getElementById('background')
		, backgroundImage = document.getElementById('background_image');

	var getRandomNumber = function (min, max) {
			return Math.round(Math.random() * (max - min) + min);
		};

	for(var i = 0; i <  dots.length; i++){
		new mouseMoveParralax({
			container: container
			, element: dots[i]
			, braking: getRandomNumber(2, 10)/10
			, units: 'px'
			// , isOposite: getRandomNumber(0, 1)
		});
	}
		new mouseMoveParralax({
			container: container
			, element: backgroundImage
			, braking: 10
			, isRotate: true
			, isOposite: true
		});
};