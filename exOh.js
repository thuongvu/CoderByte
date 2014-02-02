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


// =====================================================================================================================
																// FUNCTIONAL
// =====================================================================================================================

// iterate over array
// // reduce, combine, base, array.  takes an array, combines it, gives us a single result, returns it


function forEach(array, action, countArr) {
	for (var i = 0; i < array.length; i++) {
		action(array[i], countArr)
	}
}

function reduce(func, array) {
	var resultsObj = {};
	forEach(array, function(ele) {
		func(ele, resultsObj)
	})
	return resultsObj;
}

function countXorO(ele, resultsObj) {
	if (resultsObj['x'] == null) {
		resultsObj['x'] = 0;
	} else if (resultsObj['o'] == null) {
		resultsObj['o'] = 0;
	}

	if (ele === 'x') {
		resultsObj['x']+=1;
	}  else if (ele === 'o') {
		resultsObj['o']+=1;
	}
	return resultsObj;
}

function compare(resultsObj) {
	if (resultsObj.x === resultsObj.o) {
		console.log(resultsObj) // to see the obj
		return true;
	}  else {
		console.log(resultsObj) // to see the obj
		return false;
	}
}

function start(str) {
	var arr = str.split("")
	return compare(reduce(countXorO, arr));
}

start("xooxxo")




