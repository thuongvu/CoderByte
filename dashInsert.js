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


// 2nd attempt
var num = 454793;
var numberStr = num.toString().split("")
var newNum = [];
for (var i = 0; i < numberStr.length; i++) {
	if (i === 0) {
		newNum.push(numberStr[0])
	} else {
		if ((numberStr[i - 1] % 2 !==0) && (numberStr[i] % 2 !==0)) {
			newNum.push('-')
			newNum.push(numberStr[i])
		} else {
			newNum.push(numberStr[i])
		}
	}
}
return newNum.join("");
