(function() {
	'use strict';
	function WeekCalendar(node) {
		this.root = node;
		this.WeekCalendarModel = new WeekCalendarModel();
	}

	WeekCalendar.prototype.renderWeek = function() {
		var currentDay = this.WeekCalendarModel.daySet();
		var temp, html, data;
		temp = this.WeekCalendarModel.weekCalendarTemp();
		data = this.WeekCalendarModel.weekCalendarData();
		html = Mustache.to_html(temp, data);
		$(this.root).append(html);
		$(this.root).find('.weekday').filter('[value='+currentDay+']').addClass('weekday--current');
	};
	window.WeekCalendar = WeekCalendar;
})();
