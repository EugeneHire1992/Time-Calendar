(function() {
	'use strict';

	function CalendarModel() {
		var wrapper, wrapperData;

		var setCalendarMainCover = function() {
			wrapper = '<div class="switcher">' +
				'{{#buttots}}<div class="switcher__button">{{.}}</div>{{/buttots}}</div>' +
				'<div class="display"></div>';
		};
		var setCalendarMainData = function() {
			wrapperData = {
				buttots: ["Week", "Day"]
			};
		};
		this.getCalendarMainCover = function() {
			setCalendarMainCover();
			return wrapper;
		};

		this.getCalendarMainData = function() {
			setCalendarMainData();
			return wrapperData;
		};
	}

	window.CalendarModel = CalendarModel;
})();