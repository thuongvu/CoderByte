// Using the JavaScript language, have the function PrimeChecker(num) take num and return 1 if any arrangement of num comes out to be a prime number, otherwise return 0. For example: if num is 910, the output should be 1 because 910 can be arranged into 109 or 019, both of which are primes. 

// Use the Parameter Testing feature in the box below to test your code with different arguments.

// Input = 98Output = 1
// Input = 598Output = 1


function PrimeChecker(num) { 
	var numbers = num.toString().split("");
	var numCombos = [];
	var usedNums = [];

	permutations(numbers)
	function permutations(numbers) {
		var ch;
		for (var i = 0; i < numbers.length; i++) {
			ch = numbers.splice(i, 1)[0];
			usedNums.push(ch)
			if (numbers.length === 0) {
				numCombos.push(usedNums.slice());
			}
			permutations(numbers);
			numbers.splice(i, 0, ch);
			usedNums.pop();
		}
	}
	// return numCombos;
	var numCombosParsed = [];
	for (var j = 0; j < numCombos.length; j++) {
		var base = '';
		for (var k = 0; k < numCombos[j].length; k++) {
			base += numCombos[j][k];
		}
		numCombosParsed.push(base)
	}
   // return numCombosParsed

   var primes = [];
   var count = 0;
   for (var m = 0; m < numCombosParsed.length; m++) {
   	for (var p = 0; p < 1000; p++) {
   		if (p % numCombosParsed[m] === 0) {
   			count++
   			// console.log(count)
   		}
   	}
   	if (count < 3) {
   		console.log(counter)
   		primes.push(numCombosParsed[m]);
   	}
   	counter = 0;
   }
   // console.log(primes)
   // if (primes.length > 0) {
   // 	return 0;
   // } else {
   // 	return 1;
   // }
}

PrimeChecker(17)

