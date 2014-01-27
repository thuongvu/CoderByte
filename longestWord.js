var sen ="WOOP i love dogs!!"
var split = sen.split(" ")
var longest;
var alphabet = 'abcdefghijklmnopqrstuvwxyz'
var re = /[\w]/g;
for (var i = 0; i < split.length; i++) {
	if (i === 0) {
		longest = split[0].match(re)
	} else if (split[i].length > longest.length) {
		longest = split[i].match(re)
	}
}
return longest.join("")

// failed cases
// 1. When the input was "a beautiful sentence^&!" your output was incorrect.
// 2. When the input was "a confusing /:sentence:/[ this is not!!!!!!!~" your output was incorrect.