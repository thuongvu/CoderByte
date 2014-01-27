// var str = "hello*3";
var splitStr = str.split("");
var alphabet = "abcdefghijklmnopqrstuvwxyza";
var vowel = 'aeiou';
var reLetter = /[\w]/g;
var symbol = /[\W\d]/g;
var newStr = [];

for (var i = 0; i < splitStr.length; i++) {
	if (splitStr[i].match(reLetter)) {
		for (var j = 0; j < alphabet.length; j++) {
			if (alphabet[j] === splitStr[i]) {
				newStr.push(alphabet[j+1])
			}
		}
	} 
	if (splitStr[i].match(symbol)){
		newStr.push(splitStr[i])
	}
}
for (var k = 0; k < newStr.length; k++) {
	for (var l = 0; l < vowel.length; l++) {
		if (newStr[k] === vowel[l]) {
			newStr.splice(k, 1, newStr[k].toUpperCase())
		}
	}
}
return newStr.join("");



