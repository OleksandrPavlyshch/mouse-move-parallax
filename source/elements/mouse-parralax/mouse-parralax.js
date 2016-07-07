'use strict';
var mouseMoveParralax = function (userParams) {

	var defaultParams = {
		container: null
		, element: null
		, braking: 5
		, units: '%'
		, isOposite: false
		, isRotate: false
	};

	var params = this.extendParams(defaultParams, userParams);

	var thisFunc = this;

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
		, xMousePositionFromCenter = Math.round(moveWayReltaiveMouse * ((x/containerWidth)*100-50)/params.braking)
		, yMousePositionFromCenter = Math.round(moveWayReltaiveMouse * ((y/containerHeight)*100-50)/params.braking)
		, cx = Math.ceil(containerWidth / params.braking)
		, cy = Math.ceil(containerHeight / params.braking)
		, dx = x - cx
		, dy = y - cy
		, tiltx = (dy / cy)
		, tilty = - (dx / cx)
		, radius = Math.sqrt(Math.pow(tiltx,2) + Math.pow(tilty,2))
		, degree = (radius * 10)
		, translateValue = 'translate(' + xMousePositionFromCenter + params.units + ', ' + yMousePositionFromCenter + params.units +')'
		, rotateValue = 'rotate3d(' + -tiltx + ', ' + -tilty + ', 0, ' + degree + 'deg)';

		return params.isRotate ? rotateValue : translateValue;
};