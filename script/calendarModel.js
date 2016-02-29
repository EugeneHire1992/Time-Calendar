(function() {
	'use strict';

	function CalendarModel() {
		var wrapper, wrapperData;

		this.setWrapper = function() {
			wrapper = '<div class="switcher">' +
				'{{#buttots}}<div class="switcher__button">{{.}}</div>{{/buttots}}</div>' +
				'<div class="display"></div>';
			return wrapper;
		};

		this.setWrapperData = function() {
			wrapperData = {
				buttots: ["Week", "Day"]
			};
			return wrapperData;
		};
	}
	CalendarModel.prototype.mainWrapper = function() {
		return this.setWrapper();
	};
	CalendarModel.prototype.mainWrapperData = function() {
		return this.setWrapperData();
	};

	window.CalendarModel = CalendarModel;
})();