function BinaryConverter(str) { 
	var reversed = str.toString().split("").reverse("")
	console.log(reversed)
	var newNumArr = [];
	var power = [];
   for (var i = 0; i < reversed.length; i++) {

   	for (var j = 0; j <= i; j++) {
   		power.push(2)
   	} 
   	var times = power.reduce(function(a,b) {
   		return parseInt(a) * parseInt(b);
   	})
   	console.log(times)
   	console.log(reversed[i])

   	newNumArr.push(reversed[i] * times)

   }
   var number = newNumArr.reduce(function(a,b) {
   	return parseInt(a) + parseInt(b)
   })
   return number;
}

BinaryConverter(1000)