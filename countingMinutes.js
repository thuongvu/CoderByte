var str = "1:23am-1:08am";
// var str = "12:30pm-12:00am"
var times = str.split("-");
var times1HourMinSplit = times[0].split(":"); // ["12", "30pm"]
var times1Hour = times1HourMinSplit[0]; // 12
var times1Min = times1HourMinSplit[1].substr(0,2) // 30
var times1AMPM = times1HourMinSplit[1].substr(2,3) // pm

if (times1AMPM === 'am') {
	if (times1Hour === '12') {
		hourToMin1 = 24 * 60 + parseInt(times1Min);
	} else {
		hourToMin1 = (parseInt(times1Hour) * 60) + parseInt(times1Min);
	}
} else if (times1AMPM === 'pm') {
	if (times1Hour === '12') {
		hourToMin1 = (parseInt(times1Hour) * 60) + parseInt(times1Min);
	} else {
		hourToMin1 = ((parseInt(times1Hour) + 12) * 60) + parseInt(times1Min);
	}
}

var times2HourMinSplit = times[1].split(":") //["12", "00am"] 
var times2Hour = times2HourMinSplit[0]; // 12
var times2Min = times2HourMinSplit[1].substr(0,2) // 00
var times2AMPM = times2HourMinSplit[1].substr(2,3) // am

if (times2AMPM === 'am') {
	if (times2Hour === '12') {
		hourToMin2 = (24 * 60) + parseInt(times2Min);
	} else {
		hourToMin2 = (parseInt(times2Hour) * 60) + parseInt(times2Min);
	}
} else if (times2AMPM === 'pm') {
	if (times2Hour === '12') {
		hourToMin2 = (parseInt(times2Hour) * 60) + parseInt(times2Min);
	} else {
		hourToMin2 = ((parseInt(times2Hour) + 12) * 60) + parseInt(times2Min);
	}
}


if ((times1AMPM === times2AMPM) && (hourToMin1 > hourToMin2)) {
	var result = 24 * 60 - Math.abs(hourToMin1 - hourToMin2)
} else {
	var result = hourToMin2 - hourToMin1
}
return result;


// Incorrect test cases
// 1. When the input was "1:00pm-11:00am" your output was incorrect.
// 2. When the input was "2:08pm-2:00am" your output was incorrect.
// 3. When the input was "3:00pm-4:45am" your output was incorrect.