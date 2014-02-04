function TimeConvert(num) { 
var hours = Math.floor(num / 60),
mins = num % 60,
time = hours + ":" + mins;
num = time;
  
  // code goes here  
  return num; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
TimeConvert(readline());                            


// -----------2nd attempt--------------- //

if (num < 60) {
	var hours = 0
} else {
	var hours = Math.floor(num / 60)
}
var mins = num % 60;
var time = hours + ":" + mins;
return time

// ============================ FUNCTIONAL =========================================

function convert(num) {
	var time = {};
	if (num < 60) {
		time.hour = 0
	} else {
		time.hour = Math.floor(num / 60)
	}
	time.min = num % 60;
	return time;
}

function timeToString(time) {
	return time.hour + ":" + time.min;
}

function convertTime(num) {
	return timeToString(convert(num));
}

convertTime(90)

