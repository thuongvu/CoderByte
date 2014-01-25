// Using the JavaScript language, have the function ArithGeo(arr) take the array of numbers stored in arr 
// and return the string "Arithmetic" if the sequence follows an arithmetic pattern or return "Geometric" if 
//it follows a geometric pattern. If the sequence doesn't follow either pattern return -1. An arithmetic sequence is one where the difference between each of the numbers is consistent, where as in a geometric sequence, each term after the first is multiplied by some constant or common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. Negative numbers may be entered as parameters, 0 will not be entered, and no array will contain all the same elements. 

var arr = [5,10,15,18];
var previousNumber = 0;
var pattern = [];
arithCounter = 0;
for (var i = 1; i < arr.length; i++){
    previousNumber = arr[i];
    pattern.push(previousNumber - arr[i-1]);
}
for (var i = 1; i < pattern.length; i++) {
   if (pattern[i] === pattern[i-1]) {
   arithCounter++
}
  arithCounter;
}

// UNCOMPLETED