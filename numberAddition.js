function numberAddition() {
	var numberPattern = /\d+/g;
	var numbers = str.match(numberPattern);
	var addUp = 0;

	for (var i = 0; i < numbers.length; i++ ) {
		addUp += parseInt(numbers[i]);
	}

	str = addUp;

	return str;
}

// ----- 2nd attempt --------- //
var str = "75Number9";
var numStr = str.split("")
var re = /\d+/g;
var numbers = str.match(re)
var added = numbers.reduce(function(a,b) {
	return parseInt(a) + parseInt(b)
})
return added;
// LOL
//1. When the input was "no numbers sorry**" your output was incorrect.


// FUNCTIONAL ===================================================================================
function forEach(array, func) {
	for (var i = 0; i < array.length; i++) {
		func(array[i]);
	}
}

function matchNumbers(str) {
	return str.match(/\d+/g);
}

function reduce(combine, array) {
	var base = 0;
	forEach(array, function(ele) {
		base = combine(parseInt(ele), base)
	})
	return base;
}

function add(a,b) {
	return a + b;
}

function parseStringAndAdd(str) {
	return reduce(add, matchNumbers(str));
}

parseStringAndAdd("75Number9")



