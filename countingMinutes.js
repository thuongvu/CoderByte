var str = "12:30pm-12:00am";
var times = str.split("-");
var times1HourMinSplit = times[0].split(":");
var times1Hour = times1HourMinSplit[0];
var times1MinFirstNum = times1HourMinSplit[1].split("")[0];
var times1MinSecondNum = times1HourMinSplit[1].split("")[1];
var times1Min = times1MinFirstNum + times1MinSecondNum;

