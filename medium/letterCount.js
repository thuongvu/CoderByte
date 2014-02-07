function LetterCount(str) { 
	var splitWords = str.split(" ");
	var obj = {};
	obj.words = {};
	var highestWord = -1;
	var highestFrequency = 0;
	for (var i = 0; i < splitWords.length; i++) {
		var currentWord = splitWords[i]
		var singleWordSplit = splitWords[i].split("");

		for (var j = 0; j < singleWordSplit.length; j++) {

			if (singleWordSplit[j] === singleWordSplit[j+1]) {
				var currentLetter = singleWordSplit[j];

				if (obj.words[currentWord] == null) {
					obj.words[currentWord] = {};
					obj.words[currentWord][currentLetter] = 2;

					if (obj.words[currentWord][currentLetter] > highestFrequency) {
						highestFrequency = obj.words[currentWord][currentLetter];
						highestWord = currentWord;
					}

				} else {
					obj.words[currentWord][currentLetter]++
				}

			}
		}
	}
	return highestWord;
}
LetterCount("Hello apple pie")

// 1. When the input was "no words here" your output was incorrect.
// 2. When the input was "I lied before" your output was incorrect.
// 3. When the input was "coderbyte" your output was incorrect.
// 4. When the input was "red none yellow" your output was incorrect.


// 2nd attempt
function LetterCount(str) {
	var words = str.split(" ");
	var wordObj = {};
	var highestFrequency = 0;
	var highestWord;
	for (var i = 0; i < words.length; i++) {
		var word = words[i].split("");
		for (var j = 0; j < word.length; j++) {
			if (word[j] === word[j - 1]) {
				if (wordObj[word] == null) {
					wordObj[word] = {};
					wordObj[word][word[j]] = 0;
				}
				wordObj[word][word[j]]++;
				if (wordObj[word][word[j]] > highestFrequency) {
					highestFrequency = wordObj[word][word[j]];
					highestWord = word.join("")
				}
			}
		}
	}
	return highestWord;
}

LetterCount("Hello apple pie")

// functional

function forEach(array, func) {
	for (var i = 0; i < array.length; i++) {
		func(array[i]);
	}
}

function reduce(array, combine) {
	var wordObj = {};
	forEach(array, function(word) {
		combine(word, wordObj)
	})
	return wordObj
}

function countLetters(word, wordObj) {
	var letters = word.split("");
	forEach(letters, function (letter) {
		if (letter.match(/[a-zA-Z]/)) {
			if (wordObj[word] == null) {
				wordObj[word] = {};
			}
			if (wordObj[word][letter] == null) {
				wordObj[word][letter] = 0;
			}
			wordObj[word][letter]++;
		}
	})
}

function compareObjs(wordObj) {
	var highestFrequency = 0;
	var highestWord;
	for (words in wordObj) {
		for (wordLength in words) {
			if (wordLength > highestFrequency) {
				highestFrequency = wordLength;
				highestWord = words
			}
		} 
	}
	return highestWord;
}

function LetterCount(str) {
	var words = str.split(" ")
	return compareObjs(reduce(words, countLetters));
}

LetterCount("Hello apple pie")

