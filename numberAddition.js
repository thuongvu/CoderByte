function numberAddition() {
	var numberPattern = /\d+/g;
	var numbers = str.match(numberPattern);
	var addUp = 0;

	for (var i = 0; i < numbers.length; i++ ) {
		addUp += parseInt(numbers[i]);
	}

	str = addUp;

	return str;
}