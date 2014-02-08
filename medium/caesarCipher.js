function CaesarCipher(str,num) { 
	var split = str.split("");
	var alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	var newStr = [];

	for (var i = 0; i < split.length; i++) {
		if (alphabet.indexOf(split[i]) !== -1) {
			newStr.push(alphabet[alphabet.indexOf(split[i]) + num])
		} else {
			newStr.push(split[i])
		} 
	}
	return newStr.join("")
}
CaesarCipher("Hell1o there", 0)

// 1. When the input was "coderBYTE" and 2 your output was incorrect.
// 2. When the input was "dogs" and 8 your output was incorrect.
// 3. When the input was "byte" and 13 your output was incorrect.


// attempt 2

function CaesarCipher(str, num) {
	var split = str.split("");
	var alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
	var newStr = [];

	for (var i = 0; i < split.length; i++) {
		if (alphabet.indexOf(split[i]) !== -1) {
			newStr.push(alphabet[alphabet.indexOf(split[i]) + num])
		} else {
			newStr.push(split[i]);
		}
	}
	return newStr.join("")
}

CaesarCipher("Hell1o there", 1)