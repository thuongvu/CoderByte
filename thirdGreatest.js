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