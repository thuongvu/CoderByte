function NumberSearch(str) { 
	var split = str.split("");
	var numbers = [];
	var letterCount = 0;

	for (var i = 0; i < split.length; i++) {
		if (split[i].match(/[a-zA-Z]/)) {
			letterCount++;
		}
	}

	for (var i = 0; i < split.length; i++) {
		if (split[i].match(/[\d]/)) {
			numbers.push(split[i])
		}
	}
	var added = 0;
	for (var i = 0; i < numbers.length; i++) {
		added = parseInt(numbers[i]) + added;
	}
	return Math.round(added / letterCount);
}

NumberSearch("H3ello9-9")