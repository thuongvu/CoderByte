function DashInsertII(num) { 
	var numArr = [];
	var numStr = num.toString().split("");
	console.log(numStr)
	for (var i = 0; i < numStr.length; i++) {
		if ((numStr[i] % 2 === 0) && (numStr[i + 1] % 2 === 0) && (numStr[i] != 0) && (numStr[i+1] != 0)) {
			numArr.push(numStr[i]);
			numArr.push("*");
		} else if ((numStr[i] % 2 !== 0) && (numStr[i + 1] % 2 !== 0) && (numStr[i] != 0) && (numStr[i+1] != 0)) {
			numArr.push(numStr[i]);
			numArr.push("-");
		} else {
			numArr.push(numStr[i])
		}
		
	}
	return numArr.join("")
}

DashInsertII(56647304)

// 1. When the input was 567 your output was incorrect.
// 2. When the input was 77993 your output was incorrect.
// 3. When the input was 2129 your output was incorrect.
// 4. When the input was 39904467 your output was incorrect.
// 5. When the input was 667488958374553 your output was incorrect.