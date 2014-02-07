

function PermutationStep(num) { 
	var permArr = [];
	var usedChars = [];
	var newArray = [];
	
	var str = num.toString().split("");
	var numStr = [];
	for (var j = 0; j < str.length; j++) {
		numStr.push(parseInt(str[j]));
	}

	inner(numStr, num)	

	function inner(num, check) {
		var ch;
		for (var i = 0; i < num.length; i++) {
			ch = num.splice(i, 1)[0];
			usedChars.push(ch);
			if (num.length === 0) {
				permArr.push(usedChars.slice())
			}
			PermutationStep(num);
			num.splice(i,0,ch);
			usedChars.pop();
		}
		
		for (var k = 0; k < permArr.length; k++) {
			num = '';
			for (var l = 0; l < permArr[k].length; l++) {
				num+= permArr[k][l]
			}
			newArray.push(parseInt(num))
		}
		newArray.sort(function(a,b) {
			return a - b;
		});

		if (newArray.indexOf(check) !== -1) {
			return newArray[newArray.indexOf(check) + 1]
		}
	}


	
	

	// return newArray
}

// function numToArray(num) {
// 	var str = num.toString().split("");
// 	var numStr = [];
// 	for (var j = 0; j < str.length; j++) {
// 		numStr.push(parseInt(str[j]));
// 	}
// 	return numStr;
// }

// function start(num) {
// 	var number = numToArray(num)
// 	return PermutationStep(number, num);
// }

start(123)





// attempt 2

function permutationStep(num) {
	var number = num.toString().split("");
	var permArr = [];
	var usedNums = [];
	permute(number)
	function permute(number) {
		var ch;
		for (var i = 0; i < number.length; i++) {
			ch = number.splice(i, 1)[0];
			usedNums.push(ch);
			if (number.length === 0) {
				permArr.push(usedNums.slice());
			}
			permute(number);
			number.splice(i, 0, ch);
			usedNums.pop();
		}
	}
	var newArr = [];
	for (var j = 0; j < permArr.length; j++) {
		var base = '';
		for (var k = 0; k < permArr[j].length; k++) {
			base += permArr[j][k]
		} 
		newArr.push(parseInt(base));
	}
	
	newArr.sort(function(a,b) {
		return a - b;
	})
	if (newArr[newArr.indexOf(num) + 1] === num) {
		return -1
	} else {
		return newArr[newArr.indexOf(num) + 1]
	}
	

}


permutationStep(44444444)

1. When the input was 11121 your output was incorrect.
2. When the input was 111 your output was incorrect.
3. When the input was 9 your output was incorrect.
4. When the input was 44444444 your output was incorrect.
5. When the input was 76666666 your output was incorrect.



