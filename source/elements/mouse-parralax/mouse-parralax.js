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

		, tiltx = moveWayReltaiveMouse * 90/100/params.braking * Math.round((y/containerHeight)*200-100)
		, tilty = moveWayReltaiveMouse * 90/100/params.braking * Math.round((x/containerWidth)*200-100)
		
		, translateValue = 'translate(' + xMousePositionFromCenter + params.units + ', ' + yMousePositionFromCenter + params.units +')'
		, rotateValue = 'rotateY( '+tilty*-1+'deg ) rotateX( '+tiltx+'deg )' ;

		console.log('x='+tiltx+', y='+tilty);

		return params.isRotate ? rotateValue : translateValue;
};