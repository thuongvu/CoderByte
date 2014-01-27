function LetterChange(str) {
	var alphabet = "  abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var found = [];
	var counter = 0;
	var re = /[aeiou]/g;

			for (var iterate = 0; iterate < alphabet.length; iterate++) {
				if (alphabet.indexOf(str[iterate], 0) != -1 ) {
				found.push(alphabet[alphabet.indexOf(str[iterate], 0) + 1])
				}

			}
			var joined = found.join("")
			console.log(joined)
			var newStr = joined.replace(re, function (x) {
				return x.toUpperCase();
			})
			console.log(newStr)
}

// var str = 
// not solved yet, incomplete, CLOSE, missing puncutiona marks, etc

var str = "hello*3";
var splitStr = str.split("");
var alphabet = "abcdefghijklmnopqrstuvwxyzaABCDEFGHIJKLMNOPQRSTUVWXYZA";
var vowel = 'aeiou'
var newStr = [];
var re = /[\W\d]/g;
for (var i = 0; i < splitStr.length; i++) {
	for (var j = 0; j < alphabet.length; j++) {
		if (alphabet[j] === splitStr[i]) {
			for (var k = 0; k < vowel.length; k++) {
				if (vowel[k] === alphabet[j+1]) {
					newStr.push(alphabet[j+1].toUpperCase())
				} 
				// else {
					// newStr.push(alphabet[j+1])
				// }
			} 
			newStr.push(alphabet[j+1])
		} 
	}
	if (splitStr[i].match(re)) {
		newStr.push(splitStr[i])
	}
}
// for (var k = 0; k < newStr.length; k++) {
// 	if (var l = 0; l < vowel.length; l++) {
// 		if (newStr[k] === vowel[l]) {

// 		}
// 	}
// }
console.log(newStr);