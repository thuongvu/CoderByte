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