var str = "+d=3=+s+";
var re = /[a-zA-Z]/g;
var trueFalse = 0;
for (var i = 0; i < str.length; i++) {
	if (str[i].match(re)) {
		if ((str[i-1] === '+') && (str[i+1] === '+')) {
		} else {
			trueFalse++
		}
	}
}
if (trueFalse > 0) {
	return false;
} else {
	return true;
}

// ================ FUNCTIONAL ============================================================================
function forEach(array, func) {
	for (var i = 0; i < array.length; i++) {
		func(array[i], array[i - 1], array[i + 1])
	}
}

function strMatch(str) {
	return str.match(/[a-zA-Z]/g)
}

function checkPlusSigns(ele, previous, after) {
	if (!((previous === "+") && (after === "+"))) {
		return false;
	}
}

function map(mapFunc, secondFunc, array, condition) {
	forEach(array, function(ele, previous, after) {
		if (mapFunc(ele)) {
			if (secondFunc(ele, previous, after) === false) {
				condition = false;
			}
		}
	})	
	return condition;
}

function start(array) {
	return map(strMatch, checkPlusSigns, array, true);
}

start("+d+=3=+s+")
