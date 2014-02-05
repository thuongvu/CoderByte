function BracketMatcher(str) { 
	var left = 0;
	var right = 0;
	for (var i = 0; i < str.length; i++) {
		if (str[i] === '(') {
			left++
		} else if (str[i] === ')') {
			right++;
		}
	}

	if (left === right) {
		return 1
	} else {
		return 0
	}
         
}

BracketMatcher("(c(oder)) b(yte)")

// 1. When the input was "the color re(d))()(()" your output was incorrect.

// what if when we got (, count up, and ), count down