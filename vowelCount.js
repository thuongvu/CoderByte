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
}
return counter;
