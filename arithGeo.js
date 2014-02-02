// Using the JavaScript language, have the function ArithGeo(arr) take the array of numbers stored in arr and return 
// the string "Arithmetic" if the sequence follows an arithmetic pattern or return "Geometric" if it follows a geometric
// pattern. If the sequence doesn't follow either pattern return -1. An arithmetic sequence is one where the difference
// between each of the numbers is consistent, where as in a geometric sequence, each term after the first is multiplied 
// by some constant or common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. Negative 
// numbers may be entered as parameters, 0 will not be entered, and no array will contain all the same elements. 

// Use the Parameter Testing feature in the box below to test your code with different arguments.

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

// ================= FUNCTIONAL REFACTOR =========================================================================
// collection reduce
// forEach over array
// subtract
// divide
// check

function subtract(a,b) {
	return a - b;
}

function divide(a,b) {
	return a / b
}

function forEach(array, action) {
	for (var i = 1 ; i < array.length; i++) {
		action(array[i], array[i - 1])
	}
}

function reduce(array, operator) {
	var values = [];
	forEach(array, function(num, previousNum) {
		values.push(operator(num, previousNum))
	})
	return values;
}

function check(array, operator, geoArith) {
	var geoArith = true;
	var diff = operator(array[1],array[0]);
	var values = reduce(array, operator);
	forEach(values, function(element) {
		if (!(element === diff)) {
			geoArith = false;
		}
	})
	return geoArith;
}

function checkBoth(array) {
	if (check(array, divide) === true) {
		return "Geometric"
	} else if (check(array, subtract) === true) {
		return "Arithmetic"
	} else if ((check(array, divide) === false) && (check(array, subtract) === false)) {
		return "-1"
	}
	
}
checkBoth([5,10,20,40,80])

