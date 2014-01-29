var str = "wwwbbbw";
var newStr = [];
var count = 1;
for (var i = 0; i < str.length + 1; i++) {
	if (i === 0) {
		prev = str[0]
	} else {
		prev = str[i - 1]
		if (str[i] === prev) {
			count++
		} 
		// else 
			if (str[i] !== prev) {
			newStr.push(count)
			newStr.push(str[i - 1])
			count = 1
		}
	}
}
return newStr.join("")