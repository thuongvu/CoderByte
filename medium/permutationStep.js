

function PermutationStep(num) { 

	var str = num.toString().split("");
	var numStr = [];
	for (var j = 0; j < str.length; j++) {
		numStr.push(parseInt(str[j]));
	}


	inner(numStr, num)

	var permArr = [];
	var usedChars = [];

	function inner(num,check) {
		var ch;
		for (var i = 0; i < num.length; i++) {
			ch = num.splice(i, 1)[0];
			usedChars.push(ch);
			if (num.length === 0) {
				permArr.push(usedChars.slice())
			}
			inner(num);
			num.splice(i,0,ch);
			usedChars.pop();
		}
		var newArray = [];
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
	

}

PermutationStep(123)

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

// start(123)
