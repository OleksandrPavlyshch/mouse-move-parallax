'use strict';
var mouseMoveParralax = function (userParams) {

	var defaultParams = {
		container: null
		, element: null
		, braking: 5
		, units: '%'
		, isOposite: false
	};

	var params = this.extendParams(defaultParams, userParams);


	params.container.addEventListener('mousemove', function (event) {
		var	x = event.clientX
			, y = event.clientY
			, moveWayReltaiveMouse = params.isOposite ? -1 : 1
			, containerWidth = this.offsetWidth
			, containerHeight = this.offsetHeight
			, xMousePositionFromCenter = Math.round(moveWayReltaiveMouse * ((x/containerWidth)*100-50)/params.braking)
			, yMousePositionFromCenter = Math.round(moveWayReltaiveMouse * ((y/containerHeight)*100-50)/params.braking)
			, translateValue = 'translate(' + xMousePositionFromCenter + params.units + ', ' + yMousePositionFromCenter + params.units +')';


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
