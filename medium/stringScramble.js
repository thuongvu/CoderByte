var str1 = "win33er";
var str2 = "winner";
var hits = 0;

for (var i = 0; i < str2.length; i++) {
	for (var j = 0; j < str1.length; j++) {
		if (str2[i] === str1[j]) {
			hits++
			console.log(str2[i])
		}
	}
}

if (hits >= str2.length) {
	// console.log("true")
	return true
} else {
	// console.log("false")
	return false
}

// 1. When the input was "win33er" and "winner" your output was incorrect.
// 2. When the input was "thsisifasl3" and "thisisfalse" your output was incorrect.