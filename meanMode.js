
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



// ------------- attempt 2 ---------------- //
var arr =  [1,1,1];
var added = arr.reduce(function(previousValue, currentValue) {
	return previousValue + currentValue
})
var mean = added / arr.length;
var highestOccured = 0;
var mode;
var numObj = {};

for (var i = 0; i < arr.length; i++) {
	if (numObj[arr[i]] == null) {
		numObj[arr[i]] = 1;
	} else {
		numObj[arr[i]]++;
		if (numObj[arr[i]] > highestOccured) {
			mode = arr[i]  
		}
	}
}
if (mean === mode) {
	// console.log(1)
	return 1
} else {
	return 0
	// console.log(0)
}
































