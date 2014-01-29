var numContainer = [];
var numChecker = [];
var primes = [];
var count = 0;
for (var i = 0; i < 10000; i++) {
   numContainer.push(i)
   numChecker.push(i)
};
for (var j = 0; j < numContainer.length; j++) {
	for (var k = 0; k < numChecker.length; k++) {
		if (numContainer[j] % numChecker[k] === 0) {
			count++
		}
	}
	if (count <= 2) {
		primes.push(numContainer[j])
	}
	count = 0
}
return primes[num]