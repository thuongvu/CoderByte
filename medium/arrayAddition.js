function ArrayAddition(arr) { 
	var possible = false;
	var added = 0;
	var sorted = arr.sort(function(a,b) {
		return a - b;
	})
	var highestNum = sorted.pop()
	
	for (var i = 0; i < sorted.length; i++) {
		var added = sorted[i];

		for (var j = 0; j < sorted.length; j++) {
			if (sorted[i] !== sorted[j]) {
				added+= sorted[j];
				console.log(added)
				if (added === highestNum) {
					return true;
				}
			}
		}

		for (var k = 0; k < sorted.length; k++) {
			if (sorted[i] !== sorted[k]) {
				added-= sorted[k];
				console.log(added)
				if (added === highestNum) {
					return true;
				}
			}
		}
		added = 0;
	}    
	return false;     
}
ArrayAddition([4, 6, 23, 10, 1, 3]);