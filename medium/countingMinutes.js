function CountingMinutes(str) { 
	var time = str.match(/(\d\d?):(\d\d)(\w\w)-(\d\d?):(\d\d)(\w\w)/);
	// time[1] = 12
	// time[2] = 30
	//time[3] = pm
	// 4 = 12
	// 5 = 00
	// 6 = am
	if (time[3] === 'am') {
		var mins1 = (time[1] * 60) + time[2];
		if (time[1] === 12) {
			var mins = (24 * 60) + time[2]
		}
	} else if (time[3] === 'pm') {
		var mins1 = ((time[1] + 12) * 60 ) + time[2] 
	}

	if (time[6] === 'am') {
		var mins2 = (time[4] * 60) + time[5];
		if (time[4] === 12) {
			var mins = (24 * 60) + time[5]
		}
	} else if (time[6] === 'pm') {
		var mins2 = ((time[4] + 12) * 60 ) + time[5] 
	}

	console.log(mins1 - mins2)

}
CountingMinutes("12:30pm-12:00am")