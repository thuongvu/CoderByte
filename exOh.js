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






// ATTEMPT 3?
// loop across string
// count x's
// count o's
// if amount of x and o ===, return true, else false

function exOh(str) {
	var xCount = 0;
	var oCount = 0;
	for (var i = 0; i < str.length; i++) {
		if (str[i] === 'x') {
			xCount++;
		} else if (str[i] === 'o') {
			oCount++;
		}
	}

	if (xCount === oCount) {
		return true;
	} else {
		return false;
	}
}

exOh("xoxoxo")


// functional

function forEach(array, func) {
	for (var i = 0; i < array.length; i++) {
		func(array[i]);
	}
}

function count(array, countFunc) {
	var oCount = 0;
	var xCount = 0;
	forEach(array, function(ele) {
		if (countFunc(ele) === 'x') {
			xCount++;
		} else {
			oCount++;
		}
	})
	if (oCount === xCount) {
		return true
	} else{
		return false;
	}
}

function xOrO(ele) {
	if (ele === 'o') {
		return "o";
	} else {
		return "x";
	}
}

function compare(str) {
	return count(str, xOrO);
}

compare("xoxo")


// functional 3

function forEach(array, func) {
	for (var i = 0; i < array.length; i++) {
		func(array[i]);
	}
}

function count(array, countFunc) {
	var countObj = {};
	forEach(array, function(ele) {
		countFunc(ele, countObj);
	})
	return countObj;
}

function xOrO(ele, countObj) {
	if (countObj[ele] == null) {
		countObj[ele] = 0;
	} 
	countObj[ele]++;
}

function compareObj(countObj) {
	var propArr = [];
	for (prop in countObj) {
		propArr.push(prop);
	}
	for (var i = 1; i < propArr.length; i++) {
		if (!(countObj[propArr[i]] === countObj[propArr[i - 1]])) {
			return false;
		}
	}
	return true;
}

function compare(str) {
	return compareObj(count(str, xOrO));
}

compare("xoxox")

