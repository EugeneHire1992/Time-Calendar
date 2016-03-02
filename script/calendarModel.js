(function() {
	'use strict';

	function CalendarModel() {
		var wrapper, wrapperData;

		var setMainCover = function() {
			wrapper = '<div class="switcher">' +
				'{{#buttots}}<div class="switcher__button">{{.}}</div>{{/buttots}}</div>' +
				'<div class="display"></div>';
		};
		var setMainData = function() {
			wrapperData = {
				buttots: ["Week", "Day"]
			};
		};
		this.getMainCover = function() {
			setMainCover();
			return wrapper;
		};

		this.getMainData = function() {
			setMainData();
			return wrapperData;
		};
	}

	window.CalendarModel = CalendarModel;
})();