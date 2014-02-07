var str = 'Hello aple pie'
var lowercase = str.toLowerCase()
var split = lowercase.split(" ")

var letter;
var hits = {};
var highestWord = -1;

for (var j = 0; j < split.length; j++) {
	if (hits[split[j]] == null) {
		hits[split[j]] = 0;
		for (var i = 0; i < split[j].length; i++) {
			letter = split[j].charAt(i);
			if (i > 0) {
				if (split[j].charAt(i+1) == letter) {
					hits[split[j]]++
					if (highestWord < hits[split[j]]) {
						highestWord = split[j]
					}
				}
			}
		}
	}
}
// console.log(highestWord)
return highestWord;


// FAILED TEST CASES
// 1. When the input was "no words here" your output was incorrect.
// 2. When the input was "I lied before" your output was incorrect.
// 3. When the input was "coderbyte" your output was incorrect.
// 4. When the input was "red none yellow" your output was incorrect.
// 5. When the input was "a b c d ee" your output was incorrect.




//  ------------------------- attempt 2 --------------------------//
var str = "I lied befoore";
var split = str.split(" ");
var word;
var hits = {};
var hitsChamp = 0;
for (var i = 0; i < split.length; i++) {
	if (hits[split[i]] == null) {
		hits[split[i]] = 0;
	} 
	for (var j = 0; j < split[i].length; j++) {
		if (split[i][j] === split[i][j-1]) {
			hits[split[i]]++
		}
		if (hitsChamp < hits[split[i]]) {
			hitsChamp = split[i]
		}
	}
}
hitsChamp
if (hitsChamp === 0) {
	return -1
	// console.log('-1')
} else {
	// console.log(hitsChamp)
	return hitsChamp
}

// failed these tests, but they worked -_- go figure
// 1. When the input was "no words here" your output was incorrect.
// 2. When the input was "I lied before" your output was incorrect.
// 3. When the input was "coderbyte" your output was incorrect.
// 4. When the input was "red none yellow" your output was incorrect.





// ============= FUNCTIONAL ======================================================================================
function forEach(array, func) {
	for (var i = 0; i < array.length; i++) {
		func(array[i])
	}
}

function reduce(combine, array) {
	var letterObj = {};
	forEach(array, function(ele) {
		combine(ele, letterObj)
	})
	return letterObj;
}

function countLetters(ele, letterObj) {
	var splitWord = ele.split("");
	forEach(splitWord, function (letter) {
		if (letter.match(/[a-zA-Z]/)) {
			if (letterObj[ele] == null) {
				letterObj[ele] = {};
			}
			if (letterObj[ele][letter] == null) {
				letterObj[ele][letter] = 0;
			}
			letterObj[ele][letter] ++
		}
	})
}

function checkLettersObj(obj) {
	var highestNumber = 0;
	var highestWord;
	for (prop in obj) {
		for (p in obj[prop]) {
			if (obj[prop][p] > highestNumber) {
				highestNumber = obj[prop][p]
				highestWord = prop
			}
		}
	}
	if (highestNumber === 1) {
		return -1
	} else {
		return highestWord;
	}
}

function start(str) {
	return checkLettersObj(reduce(countLetters, str.split(" ")))
}
start("hello appple pie") // returns "appple"





// attempt 3
function LetterCount(str) {
	words = str.split(" ");
	var wordObj = {};
	var freq = 0;
	var highestWord;
	for (var i = 0; i < words.length; i++) {
		var word = words[i].split("");
		
		for (var j = 0; j < word.length; j++) {
			if (word[j] === word[j - 1]) {
				if (wordObj[word] == null) { // make word obj on wordObj if doesnt exist
					wordObj[word] = {};
				}
				var letter = word[j];
				if (wordObj[word][letter] == null) { // make letter on wordObj.word if it doesnt exist
					wordObj[word][letter] = 0;
				}
				wordObj[word][letter]++;

				if (wordObj[word][letter] > freq) {
					freq = wordObj[word][letter];
					highestWord = word.join("")
				}

			}
		}
	}
	return highestWord;
}

LetterCount('Hello aple pie');



// functional

function forEach(array, func) {
	for (var i = 0 ; i < array.length; i++) {
		func(array[i]);
	}
}












