(function() {
	'use strict';
	var wrapperData;
	function CalendarModel() {
		var wrapper;

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
		setMainCover();
		setMainData();
		this.getMainCover = function() {
			return wrapper;
		};

		this.getMainData = function() {
			return wrapperData;
		};
	}

	window.CalendarModel = CalendarModel;
})();