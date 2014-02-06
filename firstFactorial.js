
var numArray = [];	
for (var i = 1; i <= num; i++) {
	numArray.push(parseInt(i))
}
var reduced = numArray.reduce(function(previousValue, currentValue) {
	return parseInt(previousValue) * parseInt(currentValue)
})
return reduced;


// ============================ FUNCTIONAL =======================================
// iterate over array
// add things into array that are less numbers, UNTIL 0
// reduce
function forEach(array, action) {
	for (var i = 0; i < array.length; i++) {
		action(array[i])
	}
}

function findNumbersLessThan(number) {
	var arr = [];
	for (var i = 1; i < number; i++) {
		arr.push(i)
	}
	return arr;
}

function reduce(combine, base, array) {
	forEach(array, function(ele) {
		base = combine(base, ele);
	})
	return base;
}
 
function multiply(a,b) {
	return a * b
}

function multiplyFactorials(number) {
	var arr = findNumbersLessThan(number);
	return reduce(multiply, number, arr)
}

multiplyFactorials(3)


// 2nd attempt
function MultiplyFactorials(num) {
	var numArr = [];
	for (var i = 1; i <= num; i++) {
		numArr.push(i);
	}
	var base = 1;
	reduce(numArr);
	function reduce(arr) {
		for (var i = 0; i < arr.length; i++) {
			base = arr[i] * base;
		}
	}
	return base;
}

MultiplyFactorials(4)

// 2nd functional


function forEach(array, func) {
	for (var i = 0; i < array.length; i++) {
		func(array[i]);
	}
}

function genNumArr(num) {
	var numArr = [];
	for (var i = 1; i <= num; i++) {
		numArr.push(i);
	}
	return numArr;
}

function multiply(a,b) {
	return a * b;
}

function reduce(array, combine, base) {
	forEach(array, function(num) {
		base = combine(parseInt(num), parseInt(base));
	})
	return base;
}

function MultiplyFactorials(num) {
	return reduce(genNumArr(num), multiply, 1);
}

MultiplyFactorials(4)