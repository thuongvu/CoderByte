
function MeanMode(arr) { 
  var myObj = {};
var mode = 0;
var highestKey;
var sum = 0;

for (var i = 0; i < arr.length; i++) {
	myObj[arr[i]] = 0;
}

for (var j = 0; j < arr.length; j++) {
		myObj[arr[j]]++
}

myObj;

for (key in myObj) {
	var value = myObj[key]
	if (mode < value) {
		mode = value;
		highestKey = key;
	}
}


for (var k = 0; k < arr.length; k++) {
	sum += arr[k];
}
var average = sum / arr.length;
if (average == highestKey) {
	return 1
} else {
	return 0
}
  // code goes here  
 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
MeanMode(readline());    
