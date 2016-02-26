(function() {
	'use strict';
	function WeekCalendar(node) {
		this.root = node;
		this.weekDays = {
			days:[
				{dayName:'Monday', dayIndex:'0'},
				{dayName:'Tuesday', dayIndex:'1'},
				{dayName:'Wednesday', dayIndex:'2'},
				{dayName:'Thursday', dayIndex:'3'},
				{dayName:'Friday', dayIndex:'4'},
				{dayName:'Saturday', dayIndex:'5'},
				{dayName:'Sunday', dayIndex:'6'}
			]
		};
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
		temp = '{{#days}}'+
				'<span class="weekday" value="{{dayIndex}}">{{dayName}}</span>'+
			'{{/days}}';
		html = Mustache.to_html(temp, this.weekDays);
		$(html).find('[value='+currentDay+']').addClass('weekday--current');
		$(this.root).append(html);
	};
	window.WeekCalendar = WeekCalendar;
})();
