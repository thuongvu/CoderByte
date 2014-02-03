
var numArray = [];	
for (var i = 1; i <= num; i++) {
	numArray.push(parseInt(i))
}
var reduced = numArray.reduce(function(previousValue, currentValue) {
	return parseInt(previousValue) * parseInt(currentValue)
})
return reduced;


// ============================ FUNCTIONAL =======================================
// iterate over array
// add things into array that are less numbers, UNTIL 0
// reduce
function forEach(array, action) {
	for (var i = 0; i < array.length; i++) {
		action(array[i])
	}
}

function findNumbersLessThan(number) {
	var arr = [];
	for (var i = 1; i < number; i++) {
		arr.push(i)
	}
	return arr;
}

function reduce(combine, base, array) {
	forEach(array, function(ele) {
		base = combine(base, ele);
	})
	return base;
}
 
function multiply(a,b) {
	return a * b
}

function multiplyFactorials(number) {
	var arr = findNumbersLessThan(number);
	return reduce(multiply, number, arr)
}

multiplyFactorials(3)
