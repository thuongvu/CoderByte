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
return highestWord;


// FAILED TEST CASES
// 1. When the input was "no words here" your output was incorrect.
// 2. When the input was "I lied before" your output was incorrect.
// 3. When the input was "coderbyte" your output was incorrect.
// 4. When the input was "red none yellow" your output was incorrect.
// 5. When the input was "a b c d ee" your output was incorrect.









