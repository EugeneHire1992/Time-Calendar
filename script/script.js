(function() {
	'use strict';

	function Calendar(node) {
		this.$node = $(node);
		this.buildCover();
		this.root = $(node).find('.display');
		this.renderCalendarInfo();
		this.switchCalendarInfo(this.$node);
	}
	Calendar.prototype.buildCover = function() {
		var wrapper ='<div class="switcher"><%_.each(["Week","Day"],function(index){%><div class="switcher__button"><%=index%></div><%});%></div><div class="display"></div>';
		var templ = _.template(wrapper);
		this.$node.append(templ);
	};
	Calendar.prototype.renderCalendarInfo = function(rulse) {
		this.root.html('');
		var _self = this;
		clearInterval(this.intervalClock);
		switch (rulse) {
			case 'Week':
				new WeekCalendar(this.root);
				break;
			case 'Day':
				this.intervalClock = setInterval(function() {
					return new Clock(_self.root);
				}, 1000);
				break;
			default:
				new WeekCalendar(this.root);
				break;
		}
	};
	Calendar.prototype.switchCalendarInfo = function(node) {
		var _self = this;
		var $bnt = node.find('.switcher__button');
		this.intervalClock = null;
		$bnt.on('click', function() {
			_self.renderCalendarInfo(this.textContent);
		});
	};

	function Clock(node) {
		this.root = node;
		this.renderClock();
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
		this.weekDay = ['Monday', 'Thuesday',
			'Wednesday', 'Thursday',
			'Friday', 'Saturday', 'Sanday'
		];
		this.renderWeek();
	}
	WeekCalendar.prototype.daySet = function() {
		var currentDate = new Date();
		var currentDay = currentDate.getDay();
		if (currentDay === 0) currentDay = 6;
		else currentDay -= 1;
		return currentDay;
	};
	WeekCalendar.prototype.renderWeek = function() {
		var currentDay = this.daySet();
		var _self = this;
		var dayOfWeekHtml = [];
		for (var i = 0; i < this.weekDay.length; i += 1) {
			var weekDay = document.createElement('span');
			var className = 'weekday';
			if (i === currentDay) className = 'weekday weekday--current';
			$(weekDay).addClass(className)
				.text(this.weekDay[i]);
			dayOfWeekHtml.push(weekDay);
		}
		dayOfWeekHtml.forEach(function(item, i, arr) {
			$(_self.root).append(arr[i]);
		});
	};

	window.Calendar = Calendar;
})();