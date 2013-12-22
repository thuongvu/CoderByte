function LetterChange(str) {
	var alphabet = "  abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var found = [];
	var counter = 0;
	var re = /[aeiou]/g;

			for (var iterate = 0; iterate < alphabet.length; iterate++) {
				if (alphabet.indexOf(str[iterate], 0) != -1 ) {
				found.push(alphabet[alphabet.indexOf(str[iterate], 0) + 1])
				}

			}
			var joined = found.join("")
			console.log(joined)
			var newStr = joined.replace(re, function (x) {
				return x.toUpperCase();
			})
			console.log(newStr)
}


// not solved yet, incomplete, CLOSE, missing puncutiona marks, etc
