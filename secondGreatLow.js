arr.sort(function(a,b) {
	return a - b
})
for (var i = 0; i < arr.length; i++) {
	if (i === 0) {
		var previous = arr[i]
	} else {
		var previous = arr[i-1]
		if (arr[i] === previous) {
			arr.splice(i, 1)
		} 
	}
}
var returned = [];
returned.push(arr[1].toString())
returned.push(arr[arr.length - 2].toString())
return returned.join(" ")


// 1. When the input was (2,2,2,5,5,5,6) your output was incorrect.
// 2. When the input was (80, 80) your output was incorrect.


// -------- 2nd attempt --------- //
// var arr = [7, 7, 90, 1000003] 
// var arr = [2,2,2,5,5,5,6];
arr.sort(function(a,b) {
	return a - b
});
if (arr.length > 2) {
	// console.log(arr[1].toString() + " " + arr[arr.length - 2].toString())
	return arr[1].toString() + " " + arr[arr.length - 2].toString()
} else {
	// console.log(arr[0].toString() + " " + arr[1].toString())
	return arr[0].toString() + " " + arr[1].toString()
}

// UH YEAH, THIS IS BUGGY
// 1. When the input was (2,2,2,5,5,5,6) your output was incorrect.
// 2. When the input was (90, 23) your output was incorrect.
// 3. When the input was (7, 7, 90, 1000003) your output was incorrect.




// =========== FUNCTIONAL ====================================================================
function sort(array) {
	array.sort(function(a,b) {
		return a - b
	})
	return array;
}

function pluck(array, number) {
	return array[number];
}

function findNumInArray(array, number, numMinusLength) {
	var sorted = sort(array);
	var firstNum = pluck(sorted, number);
	var secondNum = pluck(sorted, sorted.length - numMinusLength)
	return firstNum.toString() + " " + secondNum.toString();
}

findNumInArray([7, 7], 1, 2)




// attempt 2

function secondGreatLow(arr) {
	arr.sort(function(a,b) {
		return a - b;
	})
	return arr[1] + " " + arr[arr.length - 2];
}

secondGreatLow([10, 90, 9, 1000003]);


// functional 

function sortArr(arr) {
	arr.sort(function(a,b) {
		return a - b;
	});
	return arr;
}

function getLowHigh(arr) {
	return arr[1] + " " + arr[arr.length - 2];
}

function secondGreatLow(arr) {
	return getLowHigh(sortArr(arr));
}

secondGreatLow([10, 90, 9, 1000003]);




