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


// attempt 2

function PrimeMover(num) { 
	var numbers = [];
	var numbersCheck = [];
	var primes = [];
	for (var i = 0; i < 1000; i++) {
		numbers.push(i);
		numbersCheck.push(i)
	}
	var count = 0;
	for (var j = 0; j < numbers.length; j++) {
		for (var k = 0; k < numbersCheck.length; k++) {
			if (numbers[j] % numbersCheck[k] === 0) {
				count++
			}
		}
		if (count <= 2) {
			primes.push(numbers[j]);
		}
		count = 0;
	}
   return primes[num]
}

PrimeMover(12)


// functional

function forEach(array, func) {
	for (var i = 0; i < array.length; i++) {
		func(array[i])
	}
}

function generateNumbers() {
	var numArr = [];
	for (var i = 0; i < 1000; i++) {
		numArr.push(i);
	}	
	return numArr;
}


function checkIfPrime(ele) {
	var checkNums = generateNumbers();
	var count = 0;
	for (var i = 0; i < checkNums.length; i++) {
		if (checkNums[i] % ele === 0) {
			count++
		}
	}
	if (count <= 2) {
		return ele;
	} else {
		return -1;
	}
}

function map(array, mapFunc) {
	var primes = [];
	forEach(array, function(ele) {
		if (!(mapFunc(ele) === -1)) {
			primes.push(mapFunc(ele));
		}
	})
	return primes;
}

function primeMover(num) {
	var primes = map(generateNumbers(), checkIfPrime);
	if (primes.indexOf(num) !== -1) {
		return "not a prime";
	} else {
		return "prime";
	}
}
primeMover(13)
