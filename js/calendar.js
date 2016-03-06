var monthNum, year;
// 获取某月份和英文简称
function getTheMonth(monthNum) {
	
	switch(monthNum) {
		case 0 :
			MonthString = "JANUARY";
			break;
		case 1:
			MonthString = "FEBRUARY";
			break;
		case 2:
			MonthString = "MARCH";
			break;
		case 3:
			MonthString = "APRIL";
			break;
		case 4:
			MonthString = "MAY";
			break;
		case 5:
			MonthString = "JUNE";
			break;
		case 6:
			MonthString = "JULY";
			break;
		case 7:
			MonthString = "AUGUST";
			break;
		case 8:
			MonthString = "SEPTEMBER";
			break;
		case 9:
			MonthString = "OCTOBER";
			break;
		case 10:
			MonthString = "NOVEMBER";
			break;
		case 11:
			MonthString = "DECEMBER";
			break;
		default:
			MonthString = "ERROR";
			break;
	};
			
	return MonthString;
}

function getWeekString(num) {
	switch(num) {
		case 0 :
			return "Sun";
		case 1 :
			return "Mon";
		case 2 :
			return "Tues";
		case 3 :
			return "Wed";
		case 4 :
			return "Thur";
		case 5 :
			return "Fri";
		case 6 :
			return "Sat";
	}
}
// 返回这个月一号星期几
function firstDayOfMonth(monthNum, year) {
	var date = new Date(year + ", " + (monthNum + 1) + ", " + "1");
	return date.getDay();
		
}

// 返回二月的天数
function TuesDays(year) {
	if (year%4 === 0) {
		if (year%100 !== 0){
			return 29;
		} else if (year%400 == 0) {
			return 29;
		} else {
			return 28;
		}
	} else {
		return 28;
	}
}

// 返回今年这个月份的天数
function getDaysOfMonth(monthNum, year) {
	var days;
	switch(monthNum) {
		case 0:
			days = 31; break;
		case 1:
			days = TuesDays(year); break;
		case 2:
			days = 31; break;
		case 3:
			days = 30; break;
		case 4:
			days = 31; break;
		case 5:
			days = 30; break;
		case 6:
			days = 31; break;
		case 7:
			days = 31; break;
		case 8:
			days = 30; break;
		case 9:
			days = 31; break;
		case 10:
			days = 30; break;
		case 11:
			days = 31; break;
	}
	return days;
}

function getCompleteDate() {
	var now = new Date();
	monthNum = now.getMonth();
	year = now.getFullYear();
	var monString = getTheMonth(monthNum);
	
	display(monthNum, year);
	
	return {
		monthNum : monthNum,
		monString : monString,
		year : year
	}
}

// 点击时候的函数
function clickFunction(monthNum, year) {
	
	var left = document.getElementsByClassName("left")[0],
		right = document.getElementsByClassName("right")[0];
	
	left.onclick = function() {
		if (monthNum == 0) {
			monthNum = 11;
			year--;
		} else {
			monthNum--;
		}
		console.log(monthNum);
		display(monthNum, year);
	};
	
	right.onclick = function() {
		if (monthNum == 11) {
			monthNum = 0;
			year++;
		} else {
			monthNum++;
		}
		console.log(monthNum);
		display(monthNum, year);
	};
}
// 展示
function display(monthNum, year) {
	var lines = document.getElementsByClassName("line"),
		month = document.getElementsByClassName("month")[0].getElementsByTagName("p")[0],
		yearDisplay = document.getElementsByClassName("year")[0].getElementsByTagName("span")[0],
//		monthNum = getCompleteDate().monthNum,
		monString = getTheMonth(monthNum),
//		year = getCompleteDate().year,
		daysOfMonth = getDaysOfMonth(monthNum, year),
		firstDay = firstDayOfMonth(monthNum, year);
	
	// 显示月份
	month.innerHTML = monString;
	console.log(monthNum, monString, year, daysOfMonth, firstDay);
	
	// 显示年份
	yearDisplay.innerHTML = year;
	
	var dateArray = [];
	var weekIndex = firstDay;
	var spanSingle = "";
	var spanContent = "";
	var beginOfline = 1;
	// 往日期数组里塞值
	for (var i = 1; i < daysOfMonth + 1; i++) {
		dateArray[0] = i;
	}
	for (var i = 0; i < lines.length; i++) {
		lines[i] == "";
		for (var j = beginOfline; j < daysOfMonth + 1; j++) {
			spanSingle = "<span class=" + getWeekString(weekIndex) + ">" + j + "</span>";
			if (weekIndex == 7) {
				weekIndex = 0;
				break;
			}
			beginOfline++;
			weekIndex++;
			spanContent = spanContent + spanSingle;
		}
		lines[i].innerHTML = spanContent;
		spanContent = "";
		
	}
}

getCompleteDate();
clickFunction(monthNum, year);
console.log(firstDayOfMonth("MARCH", 2016));