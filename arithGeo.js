var arr = [2, 4, 6, 8]
var isArith = 1;
var isGeo = 1;
var arrDiff;
var arrQuo;
var lastNumber;
for (var i = 0; i < arr.length; i++) {
	if (i === 0) {
		arrDiff = arr[1] - arr[0];
		arrQuo = arr[1] / arr[0];
	} else {
		lastNumber = arr[i-1];
		var diff = arr[i] - lastNumber;
		if (diff !== arrDiff) {
			isArith = 0;
		}
		var quo = arr[i] / lastNumber;
		if (quo !== arrQuo) {
			isGeo = 0;
		}
	}
}
if (isArith === 1) {
	return "Arithmetic"
	// console.log("Arithmetic")
} else if (isGeo ===1) {
	return "Geometric"
	// console.log("Geometric")
} 
else if ((isGeo === 0) && (isArith === 0)) {
	return -1;
	// console.log("-1")
}

// ----------- 2nd attempt ----------------------
var arr = [2, 6, 18];
var arith = true;
var geo = true;

var arithDiff;
var geoQuo;
var lastNumber;

for (var i = 0; i< arr.length; i++) {
	if (i === 0) {
		arithDiff = arr[1] - arr[0];
		geoQuo = arr[1] / arr[0]
	} else {
		lastNumber = arr[i-1]
		if (!(arithDiff === (arr[i] - lastNumber))) {
			arith = false;
		}
		if (!(geoQuo === (arr[i] / lastNumber))) {
			geo = false;
		}
	}
}
if (geoQuo === true) {
	return "Geometric" 
} else if (arith === true) {
	return "Arithmetic"
} else if ((arith === false) && (geo === false))
	return "-1"

// incorrect test cases
// 1. When the input was (2,6,18,54) your output was incorrect.
// 2. When the input was (100,200,400,800,1600) your output was incorrect.
// 3. When the input was (5,10,20,40,80) your output was incorrect.






