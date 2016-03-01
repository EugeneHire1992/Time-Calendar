(function() {
	'use strict';
	function WeekCalendar(node) {
		this.root = node;
		this.WeekCalendarModel = new WeekCalendarModel();
	}

	WeekCalendar.prototype.renderWeek = function() {
		var currentDay = this.WeekCalendarModel.daySet();
		var weekTempl, weekHtml, weekData;
		weekTempl = this.WeekCalendarModel.getWeekTempl();
		weekData = this.WeekCalendarModel.getWeekData();
		weekHtml = Mustache.to_html(weekTempl, weekData);
		$(this.root).append(weekHtml);
		$(this.root).find('.weekday').filter('[value='+currentDay+']').addClass('weekday--current');
	};
	window.WeekCalendar = WeekCalendar;
})();
