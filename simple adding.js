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

// ---------------------- //