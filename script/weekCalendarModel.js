(function() {
	'use strict';
	function WeekCalendarModel() {
		var wrapper, wrapperData;

		this.setWrapper = function() {
			wrapper = '{{#days}}' +
				'<span class="weekday" value="{{dayIndex}}">{{dayName}}</span>' +
				'{{/days}}';
			return wrapper;
		};

		this.setWrapperData = function() {
			wrapperData = {
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
			};
			return wrapperData;
		};
	}
	WeekCalendarModel.prototype.weekCalendarTemp = function() {
		return this.setWrapper();
	};
	WeekCalendarModel.prototype.weekCalendarData = function() {
		return this.setWrapperData();
	};
	WeekCalendarModel.prototype.daySet = function() {
		var currentDate = new Date();
		var currentDay = currentDate.getDay();
		if (currentDay === 0) currentDay = 6;
		else currentDay -= 1;
		return currentDay;
	};

	window.WeekCalendarModel = WeekCalendarModel;
})();