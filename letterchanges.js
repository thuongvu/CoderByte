var str = "hello*3";
var splitStr = str.split("");
var alphabet = "abcdefghijklmnopqrstuvwxyza";
var vowel = 'aeiou';
var reLetter = /[\w]/g;
var symbol = /[\W\d]/g;
var newStr = [];

for (var i = 0; i < splitStr.length; i++) {
	if (splitStr[i].match(reLetter)) {
		for (var j = 0; j < alphabet.length; j++) {
			if (alphabet[j] === splitStr[i]) {
				newStr.push(alphabet[j+1])
			}
		}
	} 
	if (splitStr[i].match(symbol)){
		newStr.push(splitStr[i])
	}
}
for (var k = 0; k < newStr.length; k++) {
	for (var l = 0; l < vowel.length; l++) {
		if (newStr[k] === vowel[l]) {
			newStr.splice(k, 1, newStr[k].toUpperCase())
		}
	}
}
return newStr.join("");
// console.log(newStr.join(""))


// 2nd attempt

var str = "hello*3";
var splitStr = str.split("");
var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var re = /\w/g;
var reLetSym = /[\W?\d?]/g;
var newStr = [];

for (var i = 0; i < splitStr.length; i++) {
	if (splitStr[i].match(re)) {
		for (var j = 0; j < alphabet.length; j++) {
			if (alphabet[j] === splitStr[i]) {
				newStr.push(alphabet[j + 1])
			}
		}
	} 
	if (splitStr[i].match(reLetSym)) {
		newStr.push(splitStr[i])
	}
}
newStr


// ================ FUNCTIONAL =============================================================
// split string to array
// forEach
// match symbol, do X
// match alphabet, do Y
// logic for creating new string
// map -- loop over string, create new string


function forEach(array, func) {
	for (var i = 0; i < array.length; i++) {
		func(array[i]);
	}
}

function splitStrToArr(str) {
	return str.split("");
}

function map(mapFunc, array, push) {
	var result = [];
	forEach(array, function(ele) {
		result.push(mapFunc(ele, push, result))
	})
	return result.join("");
}

function matchLet(letter, push, result) {
	if (!push) {
		var push = 0;
	}
	var alphabet = 'abcdefghijklmnopqrstuvwxyz';
	if (letter.match(/[a-zA-Z]/g)) {
		var index = alphabet.indexOf(letter) + push;
		return alphabet[index];
	} else if (letter.match(/[\W?\d?]/g)) {
		return letter;
	}
}

function start(str, push) {
	return map(matchLet, splitStrToArr(str), push)
}

start("hello*3", 1)






