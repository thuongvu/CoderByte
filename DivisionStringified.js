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




 // --- attempt 3--------- //
function DivisionStringfied(num1, num2) {
	var quotient = Math.round(num1 / num2)
	var qSplit = quotient.toString().split("");
	var counter = 0;
	if (qSplit.length > 3) {
		for (var i = 0; i < qSplit.length; i++) {
			counter++
			if (counter === 3) {
				counter = 0;
				qSplit.splice(i -1, 0, ',')
			}
		}
	}
	return qSplit.join("")
}

DivisionStringfied(9999, 3)


// functional

function splitNumToArr (num) {
	return num.toString().split("");
}

function forEach(array, func) {
	for (var i = 0; i < array.length; i++) {
		func(array[i], i);
	}
}

function filter(array, filterFunc) {
	var counter = 0;
	if (array.length > 3) {
		forEach(array, function(ele, i) {
			counter = filterFunc(ele, i, array, counter);
		})
	}
	return array.join("");
}

function check(ele, i, array, counter) {
	counter++;
	if (counter === 3) {
		counter = 0;
		array.splice(i - 1, 0, ",")
	}
	return counter;
}

function divide(a,b) {
	return a / b;
}

function start(num1, num2){
	var q = Math.round(divide(num1,num2));
	var qArr = splitNumToArr(q);
	return filter(qArr, check)
}

start(9999, 3)
