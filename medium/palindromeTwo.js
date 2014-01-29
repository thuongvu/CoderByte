var re = /[\w]/g;
var match = str.match(re);
var match2 = str.match(re);
for (var i = 0; i < match.length; i++) {
	var letter = match[i].toLowerCase();
	match.splice(i,1, letter);
	match2.splice(i,1, letter);
}
if (match.join("") === match2.reverse().join("")) {
	return true
} else {
	return false
}