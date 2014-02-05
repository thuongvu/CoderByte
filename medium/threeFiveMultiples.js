function ThreeFiveMultiples(num) { 
	var numsBelowNum = [];
	for (var i = 0; i < num; i++) {
		numsBelowNum.push(i);
	}

	var divisibles = [];
	for (var i = 0; i < numsBelowNum.length; i++) {
		if ((numsBelowNum[i] % 3 === 0) || (numsBelowNum[i] % 5 === 0)) {
			divisibles.push(numsBelowNum[i])
		}
	}

	var added = 0;
	for (var i = 0; i < divisibles.length; i++) {
		added = divisibles[i] + added;
	}
   
   return added;
}

ThreeFiveMultiples(6)