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























