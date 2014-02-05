function BinaryConverter(str) { 
	var reversed = str.toString().split("").reverse("")
	var newNumArr = [];
	var power = [1];
   for (var j = 1; j <= reversed.length; j++) {
      power.push(2)
   } 
   for (var i = 0; i < reversed.length; i++) {
   	var times = power.slice(0,i + 1).reduce(function(a,b) {
   		return parseInt(a) * parseInt(b);
   	})

   	newNumArr.push(reversed[i] * times)

   }
   var number = newNumArr.reduce(function(a,b) {
   	return parseInt(a) + parseInt(b)
   })
   return number;
}

BinaryConverter(100101)