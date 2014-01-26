var strArr = ["hello", "world", "after", "all"];
strArr.sort(function(a, b) {
	return b.length - a.length
})
return strArr[2]