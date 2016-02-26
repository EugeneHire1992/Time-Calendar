(function() {
	'use strict';
	function WeekCalendar(node) {
		this.root = node;
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
		var temp, html;
		temp = _templates.temp.weekCalendarTemp;
		html = Mustache.to_html(temp, _templates.dataInfo.weekCalendarData);
		$(this.root).append(html);
		$(this.root).find('.weekday').filter('[value='+currentDay+']').addClass('weekday--current');
	};
	window.WeekCalendar = WeekCalendar;
})();
