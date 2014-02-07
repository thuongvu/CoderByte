function FibonacciChecker(num) { 
	var sequence = [];
	var numFib = 0;
	for (var i = 0; i < 20; i++) {
		if (i < 2) {
			sequence.push(numFib)
			numFib++
		} else {
			numFib = (sequence[i-1] + sequence[i-2]);
			sequence.push(numFib)
		}
	}
	if (sequence.indexOf(num) !== -1) {
		return "yes"
	} else {
		return "no"
	}
}

FibonacciChecker(34)
