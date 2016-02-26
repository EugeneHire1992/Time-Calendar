(function() {
	'use strict';

	var _templates = {
		temp: {
			weekCalendarTemp: '{{#days}}' +
				'<span class="weekday" value="{{dayIndex}}">{{dayName}}</span>' +
				'{{/days}}',
			mainWrapper: '<div class="switcher">' +
				'{{#buttots}}<div class="switcher__button">{{.}}</div>{{/buttots}}</div>' +
				'<div class="display"></div>'
		},
		dataInfo: {
			weekCalendarData: {
				days: [{
					dayName: 'Monday',
					dayIndex: '0'
				}, {
					dayName: 'Tuesday',
					dayIndex: '1'
				}, {
					dayName: 'Wednesday',
					dayIndex: '2'
				}, {
					dayName: 'Thursday',
					dayIndex: '3'
				}, {
					dayName: 'Friday',
					dayIndex: '4'
				}, {
					dayName: 'Saturday',
					dayIndex: '5'
				}, {
					dayName: 'Sunday',
					dayIndex: '6'
				}]
			},
			mainWrapperData: {
				buttots: ["Week", "Day"]
			}
		}
	}

	window._templates = _templates;
})();
