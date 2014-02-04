function SimpleMode(arr) { 
	var numObj = {};
	var mostFreqNum;
	var freq = 0;
	for (var i = 0; i < arr.length; i++) {
		if (numObj[arr[i]] == null) {
			numObj[arr[i]] = 1;
		} else {
			numObj[arr[i]]++
			if (numObj[arr[i]] > freq) {
				freq = numObj[arr[i]];
				mostFreqNum = arr[i];
			}
		}
	}
	if (freq === 1) {
		return -1
	} else {
		return mostFreqNum
	}
	
}

SimpleMode([5, 10, 10, 6, 5])

// When the input was (7,8,1,2,3,4,89,94,109,76) your output was incorrect.