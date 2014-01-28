var num1 = 9999;
var num2 = 3;

function DivisionStringified(num1,num2) { 

var q = num1 / num2;

if (q < 1000) {
	return Math.round(q);
} else if (q > 1000) {
	var beforeComma = (Math.round(q / 1000)).toString();
	var afterComma = (Math.round(q % 1000)).toString();

	return(beforeComma + "," + afterComma)

}

}

// a few incorrect test cases
//When the input was 503394930 and 43 your output was incorrect.
// When the input was 9112 and 2 your output was incorrect.
//  When the input was 101077282 and 21123 your output was incorrect.



// ------------ attempt 2 using splice ------------ //
var num1 = 123456789;
var num2 = 10000000;
var quotient = num1 / num2;
var rounded = Math.round(quotient).toString().split("");
var counter = 0;
if (rounded.length > 3) {
	var numberOfCommas = Math.round(rounded.length / 4);
	for (var i = rounded.length; i > 0; i--) {
		counter++;
		if (counter === 3) {
			rounded.splice(i -1, 0, ',')
			counter = 0;
		}
	}
	 // console.log(rounded.join(""));
	 return rounded.join("")
 } else if (rounded.length <= 3) {
 	// console.log(rounded.join(""))
 	return rounded.join("")
 }
