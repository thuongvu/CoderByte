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