'use strict';
var mouseMoveParralax = function (userParams) {

	var defaultParams = {
		container: null //container element
		, element: null //parallax element
		, braking: 5 // offset brake
		, units: '%' // units type
		, rotateSacale: 1 // scale element for translate
		, isOposite: false // for mouse oposite move
		, isRotate: false // for 3D rotate
	};

	var thisFunc = this;

	var params = thisFunc.extendParams(defaultParams, userParams);

	//init scale
	params.element.style.transform = 'scale(' + params.rotateSacale +')';
	params.element.style['-webkit-transform'] = 'scale(' + params.rotateSacale +')';


	params.container.addEventListener('mousemove', function (event) {

		var translateValue = thisFunc.calculatePositionValue(event, params);

			params.element.style.transform = translateValue;
			params.element.style['-webkit-transform'] = translateValue;
	});
};

mouseMoveParralax.prototype.extendParams = function(defaultParams, userParams){
	for(var key in userParams)
		if(userParams.hasOwnProperty(key))
			defaultParams[key] = userParams[key];
	return defaultParams;
};


mouseMoveParralax.prototype.calculatePositionValue = function(event, params){
	var	x = event.clientX
		, y = event.clientY
		, moveWayReltaiveMouse = params.isOposite ? -1 : 1
		, containerWidth = params.container.offsetWidth
		, containerHeight = params.container.offsetHeight

		, xMousePositionFromCenter = moveWayReltaiveMouse * Math.round((x/containerWidth) * 200 - 100) / params.braking
		, yMousePositionFromCenter = moveWayReltaiveMouse * Math.round((y/containerHeight) * 200 - 100) / params.braking

		, tiltx = yMousePositionFromCenter * 90 /100
		, tilty = xMousePositionFromCenter * 90 / 100

		, translateValue = 'translate(' + xMousePositionFromCenter + params.units + ', ' + yMousePositionFromCenter + params.units +')' + 'scale(' + params.rotateSacale +')'
		, rotateValue = 'rotateY( '+tilty*-1+'deg ) rotateX( '+tiltx+'deg )' ;

		console.log(params.braking);

		return params.isRotate ? rotateValue : translateValue;
};