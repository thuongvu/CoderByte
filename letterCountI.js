var str = 'Hello apple pie'
var lowercase = str.toLowerCase()
var split = lowercase.split(" ")

var letter;
var hits = {};
var highestWord = 0;

for (var j = 0; j < split.length; j++) {
	if (hits[split[j]] == null) {
		hits[split[j]] = 0;
		for (var i = 0; i < split[j].length; i++) {
			letter = split[j].charAt(i);
			if (i > 0) {
				if (split[j].charAt(i+1) == letter) {
					hits[split[j]]++
					if (highestWord < hits[split[j]]) {
						highestWord = split[j]
					}
					
				}
			}
		}
	}
}

 // If there are no words with repeating letters return -1.  
 // FIGURE THAT PART OUT