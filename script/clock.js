(function() {
	'use strict';
	function Clock(node) {
		this.root = node;
	}
	Clock.prototype.timeSet = function() {
		var currentTime;
		currentTime = Date.now();
		return currentTime;
	};
	Clock.prototype.formatTime = function(timeMs) {
		var datte = new Date(timeMs);
		var h = datte.getHours();
		var m = datte.getMinutes();
		var s = datte.getSeconds();
		if (h < 10) h = '0' + h;
		if (m < 10) m = '0' + m;
		if (s < 10) s = '0' + s;
		return "" + h + ':' + m + ':' + s + "";
	};
	Clock.prototype.renderClock = function() {
		var currentTimeMs = this.timeSet();
		var currentTimeFormat = this.formatTime(currentTimeMs);
		$(this.root).text(currentTimeFormat);
	};
	window.Clock = Clock;
})();