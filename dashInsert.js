var num = 99946;
var number = num.toString().split("");
var newNumber = [];

for (var i = 0; i < number.length; i++) {
	if (i === 0) {
		newNumber.push(number[i])
	} else {
		if ((number[i -1] % 2 !== 0) && (number[i] % 2 !==0)) {
			newNumber.push("-")
			newNumber.push(number[i])
		} else {
			newNumber.push(number[i])
		}
	}
}
return newNumber.join("")


// 2nd attempt
var num = 454793;
var numberStr = num.toString().split("")
var newNum = [];
for (var i = 0; i < numberStr.length; i++) {
	if (i === 0) {
		newNum.push(numberStr[0])
	} else {
		if ((numberStr[i - 1] % 2 !==0) && (numberStr[i] % 2 !==0)) {
			newNum.push('-')
			newNum.push(numberStr[i])
		} else {
			newNum.push(numberStr[i])
		}
	}
}
return newNum.join("");


// functional x 2
// loop over array
// map function
// check.. if x, then do y
function forEach(array, func) {
	for (var i = 1; i < array.length; i++) {
		func(array[i], array[i - 1]);
	}
}

function map(mapFunc, array) {
	var newArray = [];
	forEach(array, function(ele, previous) {
		mapFunc(ele, previous, newArray);
	})
	return newArray.join("");
}

function check(ele, previous, newArray) {
	if ((ele % 2 !== 0) && (previous % 2 !== 0)) {
		newArray.push(ele);
		newArray.push("-");
	} else {
		newArray.push(ele);
	}
}

function splitNumToArr(num) {
	return num.split("");
}

function start(num) {
	var numArr = splitNumToArr(num.toString());
	return map(check, numArr)
}

start(99946)











// =====================================================================================================================
																// FUNCTIONAL - !!!!!COMPLETED!!!!
																// YAYAYAYAY
																// YAYAYA
// =====================================================================================================================

// iterate over array
// check if both and last numbers are odd
// map function to return new array

// iterate over array
// check if number & previous are odd
// if numbers are odd or not, MAP NEW ARRAY by x
// return new array
function forEach(array, action) {
	for (var i = 0; i < array.length; i++) {
		action(array[i], array[i - 1])
	}
}

function checkOdd(number) {
	if (number) {
		if (number % 2 !==0) {
			return true;
		}  else {
			return false;
		}
	}
}

function insertNumOrDash(number, previousNum, newArray) {
	if (checkOdd(number) === false) {
		newArray.push(number);
	} else if ((checkOdd(number) === true) && (checkOdd(previousNum) === true)) {
		newArray.push("-");
		newArray.push(number);
	} else {
		newArray.push(number);
	}
}

function numToArray(numbers) {
	return numbers.toString().split("");
}

function checkAndInsert(arr) {
	var newArray = [];
	forEach(arr, function(element, previousEle) {
		insertNumOrDash(element, previousEle, newArray)
	})
	return newArray;
}

function start(numbers) {
	var arr = numToArray(numbers)
	return checkAndInsert(arr).join("");
}

start(99946)
