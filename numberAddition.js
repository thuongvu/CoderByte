function numberAddition() {
	var numberPattern = /\d+/g;
	var numbers = str.match(numberPattern);
	var addUp = 0;

	for (var i = 0; i < numbers.length; i++ ) {
		addUp += parseInt(numbers[i]);
	}

	str = addUp;

	return str;
}

// ----- 2nd attempt --------- //
var str = "75Number9";
var numStr = str.split("")
var re = /\d+/g;
var numbers = str.match(re)
var added = numbers.reduce(function(a,b) {
	return parseInt(a) + parseInt(b)
})
return added;
// LOL
//1. When the input was "no numbers sorry**" your output was incorrect.