function ArithGeoII(arr) { 
	var isArith = true;
	var isGeo = true;
	var arithDiff = arr[1] - arr[0];
	var geoQuo = arr[1] / arr[0];

	for (var i = 1; i < arr.length; i++) {
		if ((arr[i] - arr[i - 1]) !== arithDiff) {
			isArith = false;
		}
		if ((arr[i] / arr[i - 1]) !== geoQuo) {
			isGeo = false;
		}
	}

  if (isArith === true) {
  	return "Arithmetic"
  } else if (isGeo === true) {
  	return "Geometric"
  } else {
  	return -1
  }
}
ArithGeoII([2, 6, 18, 54])









// functional 

	function forEach(array, func) {
		for (var i = 1; i < array.length; i++) {
			func(array[i], array[i - 1]);
		}
	}

	function subtract(a,b) {
		return a - b;
	}

	function divide(a,b) {
		return a / b;
	}

	function reduce(array, operator) {
		var values = [];
		forEach(array, function(ele, previous) {
			values.push(operator(ele, previous));
		})
		console.log(values)
		return values;
	}

	function check(array, operator, geoArith) {
		var geoArith = true;
		var diff = operator(array[1], array[0]);
		var values = reduce(array, operator);
		forEach(values, function(ele) {
			console.log(ele)
			if (!(ele === diff)) {
				geoArith = false;
			}
		})
		return geoArith;
	}

	function checkBoth(array) {
		if (check(array, divide) === true) {
			return "Geometric"
		} else if (check(array, subtract) === true) {
			return "Arithmetric"  
		} else if ((check(array, divide) === false) && (check(array, subtract) === false)) {
			return "-1"
		}
	}

	checkBoth([5,10,15,20])

