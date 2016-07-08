'use strict';
window.onload = function () {
	var dots = document.getElementsByClassName('background_dot')
		, container = document.getElementById('background')
		, backgroundImage = document.getElementById('background_image');

	var getRandomNumber = function (min, max) {
			return Math.round(Math.random() * (max - min) + min);
		};

	for(var i = 0; i <  dots.length; i++){
		var brake = getRandomNumber(2, 10)/5;
		new mouseMoveParralax({
			container: container
			, element: dots[i]
			, braking: brake
			, units: 'px'
			, translateScale: 0.8/brake
			// , isOposite: getRandomNumber(0, 1)
		});
	}
		new mouseMoveParralax({
			container: container
			, element: backgroundImage
			, braking: 14
			, isRotate: true
			, isOposite: true
		});
};