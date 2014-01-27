var num = 99946;
var number = num.toString().split("");
var newNumber = [];

for (var i = 0; i < number.length; i++) {
	if (i === 0) {
		newNumber.push(number[i])
	} else {
		if ((number[i -1] % 2 !== 0) && (number[i] % 2 !==0)) {
			newNumber.push("-")
			newNumber.push(number[i])
		} else {
			newNumber.push(number[i])
		}
	}
}
return newNumber.join("")

