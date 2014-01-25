arr = [1,2,3,100];
var arr = [3,5,-1,8,12]
var sorted = arr.sort(function (a,b) {
	return a-b
});
var highestNumber = sorted.pop()
var sum = 0;

for (var i = 0; i < sorted.length; i++) {
	sum+= sorted[i]
	if (sum === highestNumber) {
		console.log("TRUE")
	}

// 3 + 5 + -1 + 8 

}
for (var j = 0; j < sorted.length; j++) {
	sum - sorted[i]
	if (sum === highestNumber) {
		console.log("TRUE")
	}
}

// INCOMPLETE

