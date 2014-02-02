function AlphabetSoup(str) { 
  // code goes here  
  return str.split("").sort().join(""); 
  // sort() function doesn't require any params because sort starts off lexiconically, rather than numerically.  that's why for numbers, must include function a-b etc        
}



// ==============functional============================================================================//

function split(str){
	return str.split("")
};

function sort(str) {
	return str.sort()
}

function join(str) {
	return str.join("")
}

function splitSortJoin(str) {
	var split = str.split("");
	var sorted = split.sort();
	return sorted.join("")
}
splitSortJoin("WHAAAT")