// using iteration
var vowels = "aeiouAEIOU"
var counter = 0;

function countVowels(str) {
	for (var i = 0; i < str.length; i++) {
		var pos = str.indexOf(vowels[i])
		while ( pos != -1) {
			counter++
			pos = str.indexOf(vowels[i], pos + 1)
		}
	}
	console.log(counter)
}
// return counter;

countVowels("hello")

// ============== FUNCTIONAL ======================================
function forEach(array, func) {
	for (var i = 0; i < array.length; i++) {
		func(array[i])
	}
}

function counter(str) {
	if (str.match(/[aeiouAEIOU]/)) {
		var counter = 1;
	} else {
		var counter = 0;
	}
	return counter;
}

function filter(filterFunc, array) {
	var counter = 0;
	forEach(array, function(ele) {
		counter += filterFunc(ele);
	})
	return counter;
}

function splitStr(str) {
	return str.split("")
}

function countVowels(str) {
	return filter(counter, splitStr(str));
}

countVowels("hello")