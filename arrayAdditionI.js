var arr = [4, 6, 23, 10, 1, 3];
arr.sort(function(a,b) {
	return a-b;
});
var highest = arr.pop()
var sum = 0;
var possible = false;
for (var i = 0; i < arr.length; i++) {
	sum = arr[i];

	for (var j = 0; j < arr.length; j++) {
		if (i !== j) {
			sum+= arr[j];
			if (sum === highest) {
				possible = true;
			}
		}
	}

	for (var k = 0; k < arr.length; k++) {
		if (i !== k) {
			sum -= arr[k];
			if (sum === highest) {
				possible = true;
			}
		}
	}

	sum = 0
}
return possible;