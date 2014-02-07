function SwapCase(str) { 
var result = [];
var split = str.split("")
for (var i = 0; i < split.length; i++) {
	if (split[i].match(/[(a-z)]/g)) {
		result.push(split[i].toUpperCase())
	} else if (split[i].match(/[(A-Z)]/g)) {
		result.push(split[i].toLowerCase())
	} else {
		result.push(split[i])
	}
}
return result.join("")
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SwapCase(readline());     

//  ------------ 2nd attempt --------------
var str = "Hello-LOL";
var splitStr = str.split("");

for (var i = 0; i < splitStr.length; i++) {
	if (splitStr[i].match(/[a-z]/g)) {
		splitStr.splice(i,1, splitStr[i].toUpperCase())
	} else if (splitStr[i].match(/[A-Z]/g)) {
		splitStr.splice(i,1, splitStr[i].toLowerCase())
	}
}
// return splitStr.join("");
console.log(splitStr.join(""))



// ==================== FUNCTIONAL =======================================

function forEach(array, func) {
	for (var i = 0; i < array.length; i++) {
		func(array[i])
	}
}

function matchStr(str) {
	if (str.match(/[a-z]/)) {
		return str.replace(/[a-z]/g, str.toUpperCase());
	} else if (str.match(/[A-Z]/g)) {
		return str.replace(/[A-Z]/g, str.toLowerCase());
	} else {
		return str;
	}
}

function map(mapFunc, array) {
	var newArray = [];
	forEach(array, function(ele) {
		newArray.push(mapFunc(ele))
	})
	return newArray;
}

function splitStr(str) {
	return str.split("")
}

function swapCase(str) {
	return map(matchStr, splitStr(str)).join("");
}

swapCase("Hello! World123")



// 3rd attempt 

function swapCase(str) {
	var newStr = [];

	for (var i = 0; i < str.length; i++) {
		if (str[i].match(/[a-z]/)) {
			newStr.push(str[i].toUpperCase());
		} else if (str[i].match(/[A-Z]/)) {
			newStr.push(str[i].toLowerCase());
		} else {
			newStr.push(str[i]);
		}
	}
	return newStr.join("")
}


swapCase("Hello! World123")


// functional

function forEach(array, func) {
	for (var i = 0; i < array.length; i++) {
		func(array[i]);
	}
}

function map(array, mapFunc) {
	var newStr = [];
	forEach(array, function(ele) {
		newStr.push(mapFunc(ele))
	})
	return newStr;
}

function matchStr(str) {
	if (str.match(/[a-z]/)) {
		return str.toUpperCase();
	} else if (str.match(/[A-Z]/)) {
		return str.toLowerCase();
	} else {
		return str;
	}
}


function swapCase(str) {
	return map(str, matchStr).join("")
}
swapCase("Hello! World123")







