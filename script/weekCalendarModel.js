(function() {
	'use strict';
	function WeekCalendarModel() {
		var wrapper, wrapperData;

		var setWeekTempl = function(){
			wrapper = '{{#days}}' +
				'<span class="weekday" value="{{dayIndex}}">{{dayName}}</span>' +
				'{{/days}}';
		};
		var setWeekData = function(){
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
		};
		this.getWeekTempl = function() {
			setWeekTempl();
			return wrapper;
		};

		this.getWeekData = function() {
			setWeekData();
			return wrapperData;
		};
	}

	WeekCalendarModel.prototype.daySet = function() {
		var currentDate = new Date();
		var currentDay = currentDate.getDay();
		if (currentDay === 0) currentDay = 6;
		else currentDay -= 1;
		return currentDay;
	};

	window.WeekCalendarModel = WeekCalendarModel;
})();