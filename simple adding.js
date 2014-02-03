function (num){
	var numberContainer = 0;

	for (num; num > 0; num-- ) {
		numberContainer += num;
	}

	numberContainer;

	num = numberContainer;
	
	return num;
}

// ---------------another way--------------------//
	
var num = 12;
var numArray = [];
for (var i = 0; i<=num; i++) {
	numArray.push(i);
}
var added = numArray.reduce(function(first,second) {
	return first + second
})
return added;


// ----- FUNCTIONAL ----------------- //
function forEach(array, func) {
	for (var i = 0; i < array.length; i++) {
		func(array[i])
	}
}

function createArray(number) {
	var arr = [];
	for (var i = 0; i <= number; i++) {
		arr.push(i)
	}
	return arr;
}

function reduce(combine, array, base) {
	forEach(array, function(ele) {
		base = combine(ele, base);
	})
	return base;
}

function add(a,b) {
	return a + b;
}

function addUpTo(number) {
	return reduce(add, createArray(number), 0)
}

addUpTo(3)

