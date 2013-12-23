function LetterCapitalize(str) { 
var re = /\b([a-z])/g;
var replaceLetters = str.replace(re, function (x) {
    return x.toUpperCase();
})
var str = replaceLetters;
  // code goes here  
  return str; 
         
}