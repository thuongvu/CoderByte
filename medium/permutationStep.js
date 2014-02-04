function PermutationStep(num) { 
	var newNumArr = [];
	for (var i = 0; i < num.length; i++) {
		var newNum = [];
		newNum.push(num[i]);

		for(var j = 0; j < num.length; j++) {
			if num[i] !== num[j] {
				newNum.push(num[j]);
			}
		}
	}
}