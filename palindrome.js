var str = "never odd or even";
var strArr = [];
var strArrBackwards = [];
for (var i = 0; i < str.length; i++) {
	if (!(str.charAt(i)) === " ") {
		strArr.push(str.charAt(i));
		strArrBackwards.push(str.charAt(i));
	}
	
}
var forward = strArr.join("");
var reversed = strArrBackwards.reverse().join("");

if (reversed === forward) {
	console.log("palindrome")
} else {
	console.log("not a palindrome")
}

//
//1. When the input was "rotor plus three" your output was incorrect.
//2. When the input was "radars" your output was incorrect.
//3. When the input was "abcdef" your output was incorrect.




// ------------ attempt 2 ------------------------//

var str = "never odd or even";
var split = str.split("")
var newStr = []
var newStrRev = []
for (var i = 0; i < split.length; i++) {
	if (!(split[i] === ' ')) {
		newStr.push(split[i])
		newStrRev.push(split[i])
	}
}
if (newStr.join("") === newStrRev.reverse().join("")) {
	return true;
} else {
	return false;
}
// all test results true, YAY


// FUNCTIONAL ========================================================================================

function splitStr(str) {
	return str.split("")
}

function checkStr(str) {
	return str.match(/[a-zA-Z]/);
}

function map(mapFunc, array) {
	var newStr = []
	forEach(array, function(ele) {
		if (mapFunc(ele)) {
			newStr.push(mapFunc(ele)[0])
		}
	})
	return newStr;
}

function reverseArray(array) {
	return array.reverse();
}

function compareFwdRvs(str) {
	if (map(checkStr, splitStr(str)).join("") === reverseArray(map(checkStr, splitStr(str))).join("")) {
		return true;
	} else {
		return false;
	}
}

start("never odd or even")



// attempt 3



function palindrome(str) {

	var strArr = [];
	var strRevArr = [];
	for (var i = 0; i < str.length; i++) {
	
		if (str[i].match(/\w/)) {
			strArr.push(str[i]);
		}
	}

	for (var i = str.length - 1; i >= 0; i--) {
		if (str[i].match(/\w/)) {
			strRevArr.push(str[i])
		}
		
	}
	if (strArr.join("") === strRevArr.join("")) {
		console.log(strArr.join(""))
		console.log(strRevArr.join(""))
		return true;
	} else {
		return false;
	}
}

palindrome("never odd or even")



// functional 
// forEach
// if str/letter matches regex
// compare
// reverse

// function forEach(arr, func) {
// 	for (var i = 0; i < arr.length; i++) {
// 		func(arr[i])
// 	}
// }

function checkIfLetter(str) {
	return str.match(/\w/g)
}

function reverse(str) {
	var revStr = [];
	for (var i = str.length; i >= 0; i--) {
		revStr.push(str[i]);
	}
	return revStr;
}

function palindrome(str) {
	var strArr = checkIfLetter(str);
	if (strArr.join("") ===  reverse(strArr).join("")) {
		return true;
	} else {
		return false;
	}
}

palindrome("never odd or even")



