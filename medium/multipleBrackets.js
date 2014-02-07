function MultipleBrackets(str) { 
	var parenCheck = 0;
	var bracketCheck = 0;
	var paren = 0;
	var bracket = 0;
	for (var i = 0; i < str.length; i++) {
		if (str[i] === '[') {
			bracketCheck++
			bracket++
		} 
		if (str[i] === ']') {
			bracketCheck--
		} 
		if (str[i] === '(') {
			parenCheck++
			paren++
		} 
		if (str[i] === ')') {
			parenCheck--
		} 
	}
	if ((paren === 0) && (bracket === 0)) {
		return 1;
	} else if ((parenCheck === 0) && (bracketCheck === 0)) {
		return 1 + " " + (paren + bracket)
	} else if (!((parenCheck === 0) && (bracketCheck === 0))) {
		return 0;
	}
         
}

MultipleBrackets("hello");

// 1. When the input was "the co[l][]or re(d))()(()" your output was incorrect.