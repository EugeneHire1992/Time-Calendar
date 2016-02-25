(function() {
	'use strict';
	function WeekCalendar(node) {
		this.root = node;
		this.weekDays = ['Monday', 'Thuesday',
			'Wednesday', 'Thursday',
			'Friday', 'Saturday', 'Sanday'
		];
	}
	WeekCalendar.prototype.daySet = function() {
		var currentDate = new Date();
		var currentDay = currentDate.getDay();
		if (currentDay === 0) currentDay = 6;
		else currentDay -= 1;
		return currentDay;
	};
	WeekCalendar.prototype.renderWeek = function() {//переписать на шаблон
		var currentDay = this.daySet();
		var _self = this;
		var dayOfWeekHtml = [];
		for (var i = 0; i < this.weekDays.length; i += 1) {
			var weekDay = document.createElement('span');
			var className = 'weekday';
			if (i === currentDay) className = 'weekday weekday--current';
			$(weekDay).addClass(className)
				.text(this.weekDays[i]);
			dayOfWeekHtml.push(weekDay);
		}
		dayOfWeekHtml.forEach(function(item, i, arr) {
			$(_self.root).append(arr[i]);
		});
	};
	window.WeekCalendar = WeekCalendar;
})();