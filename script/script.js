(function() {
	'use strict';

	function Calendar(node) {//вынести объекты в отельные файлы
		this.$node = $(node);
		this.buildCover();
		this.root = $(node).find('.display');
		this.calendarClock = new Clock(this.root);
		this.calendarWeekCalendar = new WeekCalendar(this.root);
		this.renderCalendarInfo();
		this.switchCalendarInfo(this.$node);
		
	}
	Calendar.prototype.buildCover = function() {//все теплы вынести в отдельный файл
		var wrapper =_templates.temp.mainWrapper;
		var html = Mustache.to_html(wrapper, _templates.dataInfo.mainWrapperData);
		this.$node.append(html);
	};
	Calendar.prototype.renderCalendarInfo = function(rulse) {
		var _self = this;
		_self.root.html('');
		clearInterval(_self.intervalClock);
		switch (rulse) {
			case 'Week':
				_self.calendarWeekCalendar.renderWeek();
				break;
			case 'Day':
				_self.intervalClock = setInterval(function() {
					return _self.calendarClock.renderClock();
				}, 1000);
				break;
			default:
				_self.calendarWeekCalendar.renderWeek();
				break;
		}
	};
	Calendar.prototype.switchCalendarInfo = function(node) {
		var _self = this;
		var $bnt = node.find('.switcher__button');
		_self.intervalClock = null;
		$bnt.on('click', function() {
			_self.renderCalendarInfo(this.textContent);
		});
	};

	window.Calendar = Calendar;
})();
