'use strict';
var mouseMoveParralax = function (container, element, speed) {
	container.addEventListener('mousemove', function (event) {
		var braking = speed || 5
			, x = event.clientX
			, y = event.clientY
			, containerWidth = this.offsetWidth
			, containerHeight = this.offsetHeight
			, xMousePositionFromCenter = Math.round(-((x/containerWidth)*100-50)/braking)
			, yMousePositionFromCenter = Math.round(-((y/containerHeight)*100-50)/braking)
			, translateValue = "translate(" + xMousePositionFromCenter + "%, " + yMousePositionFromCenter + "%" +")";


			element.style.transform = translateValue;
			element.style["-webkit-transform"] = translateValue;
	});
};
