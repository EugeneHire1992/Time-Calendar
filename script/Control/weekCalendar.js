(function() {
	'use strict';

	function WeekCalendar(node) {
		this.$root = node;
		this.WeekCalendarModel = new WeekCalendarModel();
		this.WeekCalendarView = new WeekCalendarView();
	}

	WeekCalendar.prototype.renderWeek = function() {
		var currentDay = this.WeekCalendarModel.daySet();
		var weekTempl, weekHtml, weekData;
		weekTempl = this.WeekCalendarView.getWeekTempl();
		weekData = this.WeekCalendarModel.getWeekData();
		weekHtml = Mustache.to_html(weekTempl, weekData);
		this.$root.append(weekHtml);
		this.$root.find('.js-weekday')
			.filter('[value=' + currentDay + ']')
			.addClass('weekday--current');
		this.switchNote();
	};
	WeekCalendar.prototype.renderNote = function(event) {
		var target = event.target.parentNode;
		var noteData = {
			currentDay: target.firstChild.textContent,
			currentNote: target.lastChild.textContent
		};
		var nodeTempl, nodeHtml;
		nodeTempl = this.WeekCalendarView.getNoteTempl();
		nodeHtml = Mustache.to_html(nodeTempl, noteData);
		this.$root.html('').append(nodeHtml);
	};
	WeekCalendar.prototype.switchNote = function() {
		var $bnt = this.$root.find('.js-weekday');
		$bnt.on('click', this.renderNote.bind(this));
	};

	window.WeekCalendar = WeekCalendar;
})();