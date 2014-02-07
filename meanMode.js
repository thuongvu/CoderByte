
function MeanMode(arr) { 
  var myObj = {};
var mode = 0;
var highestKey;
var sum = 0;

for (var i = 0; i < arr.length; i++) {
	myObj[arr[i]] = 0;
}

for (var j = 0; j < arr.length; j++) {
		myObj[arr[j]]++
}

myObj;

for (key in myObj) {
	var value = myObj[key]
	if (mode < value) {
		mode = value;
		highestKey = key;
	}
}


for (var k = 0; k < arr.length; k++) {
	sum += arr[k];
}
var average = sum / arr.length;
if (average == highestKey) {
	return 1
} else {
	return 0
}
  // code goes here  
 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
MeanMode(readline());  



// ------------- attempt 2 ---------------- //
var arr =  [1,1,1];
var added = arr.reduce(function(previousValue, currentValue) {
	return previousValue + currentValue
})
var mean = added / arr.length;
var highestOccured = 0;
var mode;
var numObj = {};

for (var i = 0; i < arr.length; i++) {
	if (numObj[arr[i]] == null) {
		numObj[arr[i]] = 1;
	} else {
		numObj[arr[i]]++;
		if (numObj[arr[i]] > highestOccured) {
			mode = arr[i]  
		}
	}
}
if (mean === mode) {
	// console.log(1)
	return 1
} else {
	return 0
	// console.log(0)
}



// =================== FUNCTIONAL ================================================================
// mean
// reduce. add them all up and divide by array.length
// mode
//

function forEach(array, func) {
	for (var i = 0; i < array.length; i++) {
		func(array[i])
	}
}

function reduce(combine, array, base) {
	forEach(array, function(ele) {
		base = combine(base, ele)
	})
	return base;
}

function add(a,b) {
	return a + b;
}

function divide(a,b) {
	return a / b;
}

function getMean(array) {
	return divide(reduce(add, array, 0), array.length);
}

function map(mapFunc, array) {
	var freq = {};
	forEach(array, function(ele) {
		mapFunc(ele, freq)
	})
	return freq;
}

function getFrequency(ele, freq) {
	if (freq[ele] == null) {
		freq[ele] = 1
	} else {
		freq[ele]++
	}
}

function getMode(array) {
	var modeList = map(getFrequency, array);
	var highestFreq = 0;
	var mode;
	for (prop in modeList) {
		if (modeList[prop] > highestFreq) {
			highestFreq = modeList[prop]
			mode = prop;
		}
	}
	return mode;
}

function compareMeanMode(array) {
	if (getMode(array) == getMean(array)) {
		return true;
	} else {
		return false;
	}
}

compareMeanMode([1,1,1])




// attempt 3
function meanMode(arr) {
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
		sum+= arr[i];
	}
	var mean = sum / arr.length;

	var numObj = {};
	var mode;
	var modeAppears = 0;
	for (var j = 0; j < arr.length; j++) {
		var currentNumber = arr[j];

		if (numObj[currentNumber] == null) {
			numObj[currentNumber] = 0;
		}
		numObj[currentNumber]++;
		if (numObj[currentNumber] > modeAppears) {
			modeAppears = numObj[currentNumber];
			mode = currentNumber;
		}
	}

	if (mode === mean) {
		return true;
	} else {
		return false;
	}

}

meanMode([5,5,5,5]);



// functional


function forEach(array, func) {
	for (var i = 0; i < array.length; i++) {
		func(array[i]);
	}
}

function divide(a,b) {
	return a / b;
}

function add(a,b) {
	return a + b;
}

function reduce(array, combine, base) {
	forEach(array, function(ele) {
		base = combine(ele, base);
	})
	return base;
}

function getMean(array) {
	return reduce(array, add, 0) / array.length;
}

function map(array, mapFunc) {
	var freq = {};
	forEach(array, function(ele) {
		mapFunc(ele, freq);
	})
	return freq;
}

function getModeObj(ele, freq) {
	if (freq[ele] == null) {
		freq[ele] = 0;
	}
	freq[ele]++;
}

function compareModes(freq) {
	var frequency = 0;
	var mode;
	for (number in freq) {
		if (freq[number] > frequency) {
			frequency = freq[number];
			mode = number;
		}
	}
	return parseInt(mode);
}


function meanMode(arr) {
	var mode = compareModes(map(arr, getModeObj));
	var mean = getMean(arr);
	if (mean === mode) {
		return true;
	} else {
		return false;
	}
}

meanMode([5,5,5,5])
// compareModes(map([0,1,2,3,4,5,2], getModeObj))



// function getMode(array) {

// }













