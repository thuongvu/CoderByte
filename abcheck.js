function ABCheck(str) { 
var re = /a[\w\s]{3}b/;
  if (str.match(re)) {
  return true;
  } else {
  return false;
  }
  // code goes here  
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ABCheck(readline());                            
