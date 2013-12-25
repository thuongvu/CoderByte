function WordCount(str) { 
  var words = str.split(" ");
  // code goes here  
  return words.length; 
}
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
WordCount(readline());                            



// -------------- Using Regex ----------- //
function WordCount(str) {
	var re = /\b[\w\d]+/g;
	var words = str.match(re)
	return words.length;
}