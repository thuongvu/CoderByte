var str = "hello there";
var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var found = [];
var counter = 0

		for (var i = 0; i < alphabet.length; i++) {
			if (str.indexOf(alphabet[i], 0) != -1 ) {
			found.push(i + 1)
			}

		}
		console.log(found)

		for (var i = 0; i < found.length; i++) {
			found[i]
		} 

// not solved yet, incomplete