function BinaryConverter(str) { 
	var reversed = str.toString().split("").reverse("")
	console.log(reversed)
	var newNumArr = [];
	var power = [];
   for (var i = 0; i < reversed.length; i++) {

   	for (var j = 0; j < i; j++) {
   		power.push(2)
   	} 
   	var times = power.reduce(function(a,b) {
   		return a * b;
   	})

   	newNumArr.push(reversed[i] * times)

   }
   var number = newNumArr.reduce(function(a,b) {
   	return a + b
   })
   return number;
}

BinaryConverter(1000)