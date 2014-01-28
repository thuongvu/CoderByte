var num = 20;
var numArr = [];
var trueFalse = 0;
for (var i = 0; i <= num; i++) {
	numArr.push(i)
}
for (var i = 0; i < numArr.length; i++) {
	if (num % i === 0) {
		trueFalse++;
	}
}
if (trueFalse > 2) {
	return false;
} else {
	return true;
}