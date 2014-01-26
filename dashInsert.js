// incomplete
var num = 99946;
var number = num.toString().split("");
var newNumber = [];

for (var i = 0; i < number.length; i++) {
	if (i - 1 <= 0) {
		newNumber.push(number[i]);
		previousNumber = number[0]
	} else {
		previousNumber = number[i-1]
		if ((number[i] % 2 !== 0) && (previousNumber % 2 !== 0)) {
			newNumber.push(number[i])
			newNumber.push('-')
		} else if (number[i] % 2 === 0) {
			newNumber.push(number[i])
		}
	}

}
return newNumber.join("")




