var num1 = 12;
var num2 = 16;
//
var num1Factors = [];
var num2Factors = [];
var common = [];

for (var i = 0; i < num1; i++) {
	if (num1 % i === 0) {
		num1Factors.push(i)
	}
}
for (var i = 0; i < num2; i++) {
	if (num1 % i === 0) {
		num2Factors.push(i)
	}
}

for (var i = 0; i < num1Factors.length; i++) {
	for (var j = 0; j < num2Factors.length; j++) {
		if (num1Factors[i] === num2Factors[j]) {
			common.push(num1Factors[i])
		}
	}
}

return common[common.length - 1]