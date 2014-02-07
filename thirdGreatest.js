var strArr = ["hello", "world", "after", "all"];
strArr.sort(function(a, b) {
	return b.length - a.length
})
return strArr[2]


// =================== FUNCTIONAL ====================================================

function sortString(arr) {
	arr.sort(function(a,b) {
		return b.length - a.length;
	})
	return arr;
}

function returnThirdString(arr) {
	return sortString(arr)[2]
}
returnThirdString(["hi", "world", "after", "all"])


// attempt 2

function thirdGreatest(arr) {
	arr.sort(function(a,b) {
		return a.length - b.length;
	})
	return arr[2]
}

thirdGreatest(["hi", "world", "after", "all"])

// FUNCTIONAL

function sortArray(arr) {
	return arr.sort(function(a,b) {
		return a.length - b.length;
	})
}

function pluck(arr) {
	return arr[2];
}

function thirdGreatest(arr) {
	return pluck(sortArray(arr));
}

thirdGreatest(["hi", "world", "after", "all"])

