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
	if (num2 % i === 0) {
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


// 1. When the input was 12 and 16 your output was incorrect.
// 2. When the input was 4 and 3 your output was incorrect.
// 3. When the input was 8 and 2 your output was incorrect.
// 4. When the input was 100 and 50 your output was incorrect.
// 5. When the input was 14 and 28 your output was incorrect.
// 6. When the input was 1 and 1 your output was incorrect.
// 7. When the input was 15 and 60 your output was incorrect.