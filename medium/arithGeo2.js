// Using the JavaScript language, have the function ArithGeoII(arr) take the array of numbers stored in arr and return
// the string "Arithmetic" if the sequence follows an arithmetic pattern or return "Geometric" if it follows a geometric
// pattern. If the sequence doesn't follow either pattern return -1. An arithmetic sequence is one where the difference 
//between each of the numbers is consistent, where as in a geometric sequence, each term after the first is multiplied 
//by some constant or common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. Negative 
//numbers may be entered as parameters, 0 will not be entered, and no array will contain all the same elements. 

// Use the Parameter Testing feature in the box below to test your code with different arguments.

var arr = [5,10,15];
var isGeo = 1;
var isArith = 1;
var geoQuo;
var ariDiff;
var prev;

for (var i = 0; i < arr.length; i++) {
	if (i === 0) {
		geoQuo = arr[1] / arr[0];
		ariDiff = arr[1] - arr[0];
 	} else {
 		prev = arr[i - 1];
 		if (!((arr[i] - prev) === ariDiff)) {
 			isArith = 0;
 		}
 		if (!((arr[i] / prev) === geoQuo)) {
 			isGeo = 0;
 		}
 	}
}
if (isGeo === 1) {
	return "Geometric"
} else if (isArith === 0) {
	return "Arithmetic"
} else if ((isGeo === 0) && (isArith === 0)) {
	return -1
}