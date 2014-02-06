function SwapII(str) { 
	var splitStr = str.split("");
	var newStr = [];

	
	var match = str.match(/(\d)[a-zA-Z]+(\d)/g)
	console.log(match)
	var num1 = match[0].charAt(0)
	var num2 = match[0].charAt(match[0].length - 1)
	match.splice(0, 1, num2)
	console.log(match)

	// for (var i = 0; i < splitStr.length; i++) {
	// 	if (splitStr[i].match(/[a-z]/)) {
	// 		newStr.push(splitStr[i].toUpperCase())
	// 	} else if (splitStr[i].match(/[A-Z]/)) {
	// 		newStr.push(splitStr[i].toLowerCase())
	// 	} else {
	// 		newStr.push(splitStr[i].toLowerCase())
	// 	}
	// }
 //   console.log(newStr.join)   

}

SwapII("Hello -5LOLL6")


// INCOMPLETE