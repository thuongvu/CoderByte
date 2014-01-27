function LetterCapitalize(str) { 
var re = /\b([a-z])/g;
var replaceLetters = str.replace(re, function (x) {
    return x.toUpperCase();
})
var str = replaceLetters;
  // code goes here  
  return str; 
         
}

var str = "hello world";
var words = str.split(" ")

for (var i = 0; i< words.length;i++) {
	var word = words[i].split("");
	word[0] = word[0].toUpperCase();
	words[i] = word.join("")
}
return words.join(" ");

// --------------- //
