var str = "+d=3=+s+";
var re = /[a-zA-Z]/g;
var trueFalse = 0;
for (var i = 0; i < str.length; i++) {
	if (str[i].match(re)) {
		if ((str[i-1] === '+') && (str[i+1] === '+')) {
		} else {
			trueFalse++
		}
	}
}
if (trueFalse > 0) {
	return false;
} else {
	return true;
}