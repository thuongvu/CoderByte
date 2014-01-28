function ExOh(str) { 
	var reX = /[x]?/g;
	var reO = /[o]?/g;
	str.match(reX);
	str.match(reO);

	if (str.match(reX).length != str.match(reO).length) {
		return false;
	} else {
		return true;
	}
	  // code goes here  
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ExOh(readline());                            
// FAILS TESTS




//
function ExOh(str) { 
var o = "o";
var x = "x";
var counterO = 0;
var counterX = 0;

for (var i = 0; i < str.length; i++) {
	if (str[i] === o) {
		counterO++
	} else if (str[i] === x) {
		counterX++
	};
}
if (counterO != counterX) {
	return false;
} else if (counterO === counterX) {
	return true;
}
	  // code goes here  
         
}

// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ExOh(readline());  

// PASSES ALL TESTS     




// ------ third attempt

var str = "xooxxo";
var xCount = 0;
var oCount = 0;

for (var i = 0; i < str.length; i++) {
	if (str[i] === "x") {
		xCount++
	} else if (str[i] === "o") {
		oCount++
	}
}
if (xCount === oCount) {
	return true;
} else {
	return false;
}











