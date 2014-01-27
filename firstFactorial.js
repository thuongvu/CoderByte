
var numArray = [];	
for (var i = 1; i <= num; i++) {
	numArray.push(parseInt(i))
}
var reduced = numArray.reduce(function(previousValue, currentValue) {
	return parseInt(previousValue) * parseInt(currentValue)
})
reduced;