var arr = [2, 4, 6, 8]
var isArith = 1;
var isGeo = 1;
var arrDiff;
var arrQuo;
var lastNumber;
for (var i = 0; i < arr.length; i++) {
	if (i === 0) {
		arrDiff = arr[1] - arr[0];
		arrQuo = arr[1] / arr[0];
	} else {
		lastNumber = arr[i-1];
		var diff = arr[i] - lastNumber;
		if (diff !== arrDiff) {
			isArith = 0;
		}
		var quo = arr[i] / lastNumber;
		if (quo !== arrQuo) {
			isGeo = 0;
		}
	}
}
if (isArith === 1) {
	return "Arithmetic"
	// console.log("Arithmetic")
} else if (isGeo ===1) {
	return "Geometric"
	// console.log("Geometric")
} 
else if ((isGeo === 0) && (isArith === 0)) {
	return -1;
	// console.log("-1")
}


