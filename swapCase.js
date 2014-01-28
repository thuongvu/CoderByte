function SwapCase(str) { 
var result = [];
var split = str.split("")
for (var i = 0; i < split.length; i++) {
	if (split[i].match(/[(a-z)]/g)) {
		result.push(split[i].toUpperCase())
	} else if (split[i].match(/[(A-Z)]/g)) {
		result.push(split[i].toLowerCase())
	} else {
		result.push(split[i])
	}
}
return result.join("")
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SwapCase(readline());     

//  ------------ 2nd attempt --------------
var str = "Hello-LOL";
var splitStr = str.split("");

for (var i = 0; i < splitStr.length; i++) {
	if (splitStr[i].match(/[a-z]/g)) {
		splitStr.splice(i,1, splitStr[i].toUpperCase())
	} else if (splitStr[i].match(/[A-Z]/g)) {
		splitStr.splice(i,1, splitStr[i].toLowerCase())
	}
}
return splitStr.join("");