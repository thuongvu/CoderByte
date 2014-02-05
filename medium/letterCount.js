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