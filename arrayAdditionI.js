var arr = [4, 6, 23, 10, 1, 3];
arr.sort(function(a,b) {
	return a-b;
}); // [1, 3, 4, 6, 10, 23]
var highest = arr.pop()
var sum = 0;
var possible = false;
for (var i = 0; i < arr.length; i++) {
	sum = arr[i];

	for (var j = 0; j < arr.length; j++) {
		if (i !== j) {
			sum+= arr[j];
			if (sum === highest) {
				possible = true;
			}
		}
	}

	for (var k = 0; k < arr.length; k++) {
		if (i !== k) {
			sum -= arr[k];
			if (sum === highest) {
				possible = true;
			}
		}
	}

	sum = 0
}
return possible;

// trying to think as the computer thinks
// when arr[i] === 1
// j
// 1 + 3 = 4 // false
// 4 + 4 = 8 // false
// 8 + 6 = 16 // false
// 16 + 10 = 26 // false
// k
// 26 - 3 = 23 // false
// 23 - 4 = 19 // false
// 19 - 6 = // false
// false

//when arr[i] === 3
//j
// 3 + 1 = 4; // false
// 3 + 4 = 7;
// 7 + 6 = 13;
// 13 + 10 = 23; BINGO
// k
// 23 - 1//, etc



// ============= FUNCTIONAL THIS IS HARD ==============================================================================
																		//--------------
																		// UNCOMPLETE
																		//----------------
// sort array
// pop highest one
// iterate over array
// reduce function. add/subtract/etc
// check

// function popHighest(arr) {
// 	return arr.pop()
// }

// function forEach(arr, action) {
// 	for (var i = 0; i < arr.length; i++) {
// 		action(arr[i])
// 	}
// }

// function add(a,b) {
// 	console.log(a + b)
// 	return parseInt(a) + parseInt(b);
// }

// function subtract(a,b) {
// 	return parseInt(a) - parseInt(b);
// }

// function addSubtract(combine, check, arr, base, highest) {
// 	forEach(arr, function(ele) {
// 		base = ele; // base = current element iteration we are on
// 		forEach(arr, function(ele) { // another foreach
// 			if (ele !== base) { // if ele in here === base, then no go.
// 				combine(ele, base) // combined everything
// 				if (check(base, highest) === false)// check it {
// 					forEach(arr, function(ele) {
// 						if (ele !==base) {
// 							combine(ele, base)
// 						}
// 					})
// 				}
// 			}
// 		})
// 	})
// }

// function checkIfPossible(number, highest) {
// 	var possible = false;
// 	if (number === highest) {
// 		possible = true;
// 		console.log("possible is true")
// 	}
// 	return possible;
// }

// function workTogether(arr) {
// 	var sorted = arr.sort(function(a,b) {
// 		return a - b;
// 	});
// 	var highest = popHighest(sorted);
// 	if (addSubtract(add, checkIfPossible, arr, 0, highest) === false) {
// 		return addSubtract(subtract, checkIfPossible, arr, 0, highest)
// 	}
// }
// workTogether([4, 6, 23, 10, 1, 3])


