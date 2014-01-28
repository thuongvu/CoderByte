var str = "never odd or even";
var strArr = [];
var strArrBackwards = [];
for (var i = 0; i < str.length; i++) {
	if (!(str.charAt(i)) === " ") {
		strArr.push(str.charAt(i));
		strArrBackwards.push(str.charAt(i));
	}
	
}
var forward = strArr.join("");
var reversed = strArrBackwards.reverse().join("");

if (reversed === forward) {
	console.log("palindrome")
} else {
	console.log("not a palindrome")
}

//
//1. When the input was "rotor plus three" your output was incorrect.
//2. When the input was "radars" your output was incorrect.
//3. When the input was "abcdef" your output was incorrect.




// ------------ attempt 2 ------------------------//

var str = "never odd or even";
var split = str.split("")
var newStr = []
var newStrRev = []
for (var i = 0; i < split.length; i++) {
	if (!(split[i] === ' ')) {
		newStr.push(split[i])
		newStrRev.push(split[i])
	}
}
if (newStr.join("") === newStrRev.reverse().join("")) {
	return true;
} else {
	return false;
}
// all test results true, YAY