function LetterCapitalize(str) { 
var re = /\b([a-z])/g;
var replaceLetters = str.replace(re, function (x) {
    return x.toUpperCase();
})
var str = replaceLetters;
  // code goes here  
  return str; 
         
}
// --------------- //

var str = "hello world";
var words = str.split(" ")

for (var i = 0; i< words.length;i++) {
	var word = words[i].split("");
	word[0] = word[0].toUpperCase();
	words[i] = word.join("")
}
return words.join(" ");

// --------------- //
// using splices
var str = "hello world";
var words = str.split(" ");
for (var i = 0; i < words.length; i++) {
	var word = words[i].split("");
	var letterToUpper = word[0].toUpperCase()
	word.splice(0,1, letterToUpper)
	words[i] = word.join("")
}
return words;

// ============================================= functional =======================================================
// split string into array of words
// choose the letter
// letter to toUpperCase
// splice the letter, return words

function forEach(array, func) {
	for (var i = 0; i < array.length; i++) {
		func(array[i], i)
	}
}

function reduce(combine, array) {
	forEach(array, function(ele, i) {
		var currentWordArr = array[i].split("");
		var upperLetter = combine(ele)
		var splicedWord = currentWordArr.splice(0,1, upperLetter)
		array.splice(i, 1, currentWordArr.join(""))
	})
	return array;
}

function splitString(str) {
	return str.split(" ");
}

function upperCase(word) {
	return word[0].toUpperCase();
}

function firstLetterCap(str) {
	var stringArr = splitString(str);
	return reduce(upperCase, stringArr)
}

firstLetterCap("hello there whats happening")




// 3rd attempt 


function LetterCapitalize(str) {
	var re = /\b[a-zA-Z]/g;
	return str.replace(re, function(firstLetter) {
		return firstLetter.toUpperCase();
	})
}


LetterCapitalize("hello there whats happening")


// 4th attempt splices

function LetterCapitalize(str) {
	var words = str.split(" ");

	for (var i = 0; i < words.length; i++) {
		var word = words[i].split("");
		var capFirstLetter = word[0].toUpperCase();
		word.splice(0, 1, capFirstLetter);
		words.splice(i, 1, word.join(""))
	}
	return words.join(" ")
}

LetterCapitalize("hello there whats happening")


// functional

function forEach(array, func) {
	for (var i = 0; i < array.length; i++) {
		func(array[i], i);
	}
}

function splitWords(str) {
	return str.split(" ");
}

function map(array, mapFunc) {
	forEach(array, function(word, i) {
		mapFunc(word, i, array);
	})
	return array;
}

function spliceUpper(word, i, array) {
	var letters = word.split("");
	var firstLetUp = letters[0].toUpperCase();
	letters.splice(0, 1, firstLetUp);
	array.splice(i, 1, letters.join(""))
	return array;
}

function LetterCapitalize(str) {
	return map(splitWords(str), spliceUpper).join(" ")
}

LetterCapitalize("hello there whats happening")




