function TripleDouble(num1,num2) { 
	var num1Str = num1.toString().split("");
	var num2Str = num2.toString().split("");
	for (var i = 0; i < num1Str.length; i++) {
		if ((num1Str[i] === num1Str[i+1]) && (num1Str[i] === num1Str[i+2])) {
			var num1Triple = parseInt(num1Str[i])
		}
	}

	var doubles = [];
	for (var i = 0; i < num2Str.length; i++) {
		if ((num2Str[i] === num2Str[i+1])) {
			doubles.push(parseInt(num2Str[i]))
		}
	}
	for (var i = 0; i < doubles.length;i++) {
		if (doubles[i] === num1Triple) {
			return 1;
		} else {
			return 0;
		}
	}
}
TripleDouble(12333, 33)