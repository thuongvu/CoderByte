var sen ="WOOP i love dogs!!"
var split = sen.split(" ")
var longest;
var alphabet = 'abcdefghijklmnopqrstuvwxyz'
var re = /[\w]/g;
for (var i = 0; i < split.length; i++) {
	if (i === 0) {
		longest = split[0].match(re)
	} else if (split[i].length > longest.length) {
		longest = split[i].match(re)
	}
}
return longest.join("")

// failed cases
// 1. When the input was "a beautiful sentence^&!" your output was incorrect.
// 2. When the input was "a confusing /:sentence:/[ this is not!!!!!!!~" your output was incorrect.

// =================== FUNCTIONAL =================================================================

// split words in a sentence... in an array
// regex match to get a-z
// loop over array
// check length of element in array
// compare length of element to other elements

function splitIntoWords(str) {
	return str.split(" ")
}
function checkIfWord(word) {
	return word.match(/[a-zA-Z]/g).join("")
}
function returnWordLength(word) {
	return word.length;
}
function forEach(array, func) {
	for (var i = 0; i < array.length; i++) {
		func(array[i])
	}
}
function map(mapFuncInner, mapFuncOuter,array) {
	var longestWord;
	var longestLength = 0;
	forEach(array, function(ele) {
		if (mapFuncOuter(mapFuncInner(ele)) > longestLength) {
			longestWord = checkIfWord(ele);
		}
	})
	return longestWord;
}
function start(str) {
	return map(checkIfWord, returnWordLength, splitIntoWords(str))
}
start("hellll3loooo what3supppp32")



// attempt 2

function longestWord(str) {
	var words = str.split(" ");
	var amountOfLetters = 0;
	var longestWord;
	for (var i = 0; i < words.length; i++) {
		if (words[i].length > amountOfLetters) {
			amountOfLetters = words[i].length;
			longestWord = words[i]
		}
	}
	return longestWord;
}

longestWord("hellloooo there")

// functional

function forEach(array, func) {
	for (var i = 0; i < array.length; i++) {
		func(array[i]);
	}
}

function map(array, mapFunc) {
	var longestWord;
	var highestNumLetters = 0;
	forEach(array, function(word) {
		if (mapFunc(word) > highestNumLetters) {
			highestNumLetters = mapFunc(word);
			longestWord = word;
		}
	})
	return longestWord;
}

function countLettersOf(word) {
	return word.length;
}

function splitStrToArr(str) {
	return str.split(" ");
}

function longestWord(str) {
	return map(splitStrToArr(str), countLettersOf)
}

longestWord("hellloooo there")