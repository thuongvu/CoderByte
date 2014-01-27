function AlphabetSoup(str) { 
  // code goes here  
  return str.split("").sort().join(""); 
  // sort() function doesn't require any params because sort starts off lexiconically, rather than numerically.  that's why for numbers, must include function a-b etc        
}