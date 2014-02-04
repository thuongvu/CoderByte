function Consecutive(arr) { 
	arr.sort(function(a,b) {
		return a - b;
	})
	var newArray = [];
	for (var i = 0; i < arr.length; i++) {
		newArray.push(arr[i])
		if (arr[i+1]) {
			// console.log((arr[i+1] - 1) - arr[i]) // number until next number in array
			var numUntilNext = (arr[i+1] - 1) - arr[i];
			for (var j = 1; j < numUntilNext + 1; j++) {
				newArray.push(arr[i] + j)
			}
		}
	}
   return newArray.length - arr.length;
}

// Consecutive([-2,10,4])
Consecutive([5,10,15])

// ================= FUNCTIONAL ===================================
function forEach(array, func) {
	for (var i = 0; i < array.length; i++) {
		func(array[i], array[i+1])
	}
}

function map(mapFunc, array) {
	var newNums = 0;
	forEach(array, function(ele, next) {
		if (mapFunc(ele, next)) {
			newNums += mapFunc(ele, next);
		}
	})
	return newNums;
}

function newNums(ele, next) {
	return next - ele;
} 

function consecutive(array) {
	return map(newNums, array);
}

consecutive([5,10,15])