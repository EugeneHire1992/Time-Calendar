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
		var wrapper ='<div class="switcher">'+
						'<%_.each(["Week","Day"],function(index){%>'+
						'<div class="switcher__button"><%=index%></div><%});%></div>'+
					'<div class="display"></div>';
		var templ = _.template(wrapper);
		this.$node.append(templ);
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

	function Clock(node) {
		this.root = node;
	}
	Clock.prototype.timeSet = function() {
		var currentTime;
		currentTime = Date.now();
		return currentTime;
	};
	Clock.prototype.formatTime = function(timeMs) {
		var datte = new Date(timeMs);
		var h = datte.getHours();
		var m = datte.getMinutes();
		var s = datte.getSeconds();
		if (h < 10) h = '0' + h;
		if (m < 10) m = '0' + m;
		if (s < 10) s = '0' + s;
		return "" + h + ':' + m + ':' + s + "";
	};
	Clock.prototype.renderClock = function() {
		var currentTimeMs = this.timeSet();
		var currentTimeFormat = this.formatTime(currentTimeMs);
		$(this.root).text(currentTimeFormat);
	};

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

	window.Calendar = Calendar;
})();