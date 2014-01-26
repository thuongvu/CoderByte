arr.sort(function(a,b) {
	return a - b
})
for (var i = 0; i < arr.length; i++) {
	if (i === 0) {
		var previous = arr[i]
	} else {
		var previous = arr[i-1]
		if (arr[i] === previous) {
			arr.splice(i, 1)
		} 
	}
}
var returned = [];
returned.push(arr[1].toString())
returned.push(arr[arr.length - 2].toString())
return returned.join(" ")


// 1. When the input was (2,2,2,5,5,5,6) your output was incorrect.
// 2. When the input was (80, 80) your output was incorrect.