function FormattedDivision(num1,num2) { 
	if (num1 === num2) {
	   return "1.0000";
	 }
	var div = (num1 / num2).toString();
	var match = div.match(/(\d+).(\d+)/);
	var beforeDecimal = match[1];
	var afterDecimal = match[2].slice(0,4);
	if (afterDecimal === 0) {
		afterDecimal = 0000;
	}
	var counter = 0;
	var newBeforeDecimal = [];
	console.log(match)
   for (var i = 0; i < beforeDecimal.length; i++) {
   	counter++;
   	if (counter === 3) {
   		counter = 0;
   		newBeforeDecimal.push(",")
   	}
   	newBeforeDecimal.push(beforeDecimal[i]);
   }
   return newBeforeDecimal.join("").toString() +"." + afterDecimal.toString()
}
FormattedDivision(123456789, 10000)