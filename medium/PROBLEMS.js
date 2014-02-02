// Array addition
// Using the JavaScript language, have the function ArrayAddition(arr) take the array of numbers stored in arr and return 
// the string true if any combination of numbers in the array can be added up to equal the largest number in the array, 
// otherwise return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true 
// because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all the same elements, and may contain 
// negative numbers. 

// Use the Parameter Testing feature in the box below to test your code with different arguments.





// Binary Converter
// Using the JavaScript language, have the function BinaryConverter(str) return the decimal form of the binary value. 
// For example: if 101 is passed return 5, or if 1000 is passed return 8. 

// Use the Parameter Testing feature in the box below to test your code with different arguments.








// Letter Count
// Using the JavaScript language, have the function LetterCount(str) take the str parameter being passed and return the first word with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by spaces. 

// Use the Parameter Testing feature in the box below to test your code with different arguments.


// Caesar Cipher

// Using the JavaScript language, have the function CaesarCipher(str,num) take the str parameter and perform a Caesar 
// Cipher shift on it using the num parameter as the shifting number. A Caesar Cipher works by shifting each letter in 
// the string N places down in the alphabet (in this case N will be num). Punctuation, spaces, and capitalization
// should remain intact. For example if the string is "Caesar Cipher" and num is 2 the output should be "Ecguct Ekrjgt".

var str = "Caesar Cipher3".split("")
var x = 0
var alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var re = /\w/g
var reLetSym = /[\d]/g;
var match = str.match(re)
var newStr = [];
for (var i = 0; i < match.length; i++) {
	if (str[i].match(re)) {
		for (var j = 0; j < alphabet.length; j++) {
			if (str[i] === alphabet[j]) {
				newStr.push(alphabet[j+x])
			}
		}
	}
	// if (str[i].match(reLetSym)) {
	// 	console.log(str[i])
	// 	newStr.push(str[i])
	// }
}
newStr






// Use the Parameter Testing feature in the box below to test your code with different arguments.


// Simple Mode
// Using the JavaScript language, have the function SimpleMode(arr) take the array of numbers stored in arr and return the number that appears most frequently (the mode). For example: if arr contains [10, 4, 5, 2, 4] the output should be 4. If there is more than one mode return the one that appeared in the array first (ie. [5, 10, 10, 6, 5] should return 5 because it appeared first). If there is no mode return -1. The array will not be empty. 

// Use the Parameter Testing feature in the box below to test your code with different arguments.