function FibonacciChecker(num) { 
	var numArr = [];
	for (var i = 0; i <= num; i++) {
		numArr.push(i)
	}
	console.log(numArr)
	var sum;
	var sequence = [];
	for (var j = 0; j < numArr.length; j++) {
		// if (j < 2) {
			// sequence.push(numArr[j] + numArr[j - 1]);
		// } else {
			sequence.push((j - 1) + (j - 2));
			// sequence.push(numArr[j - 1] + numArr[j - 2]);
		// }
		
		

	}
	console.log(sequence)
	if (sequence.indexOf(num) !== -1) {
		return "yes"
	} else {
		return "no"
	}
}

FibonacciChecker(34)