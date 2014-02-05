function StringReduction(str) { 
	var split = str.split("");
	var anyMore = 1;
		function check() {
			var anymore = 0;
			for (var i = 0; i < split.length; i++) {
				if ((split[i] === 'a') && (split[i+1] === 'c')) {
					split.splice(i, 1, "b")
					split.splice(i+1, 1)
					anymore = 1;
				} else if ((split[i] === 'c') && (split[i+1] === 'a')) {
					split.splice(i, 1, "b")
					split.splice(i+1, 1)
					anymore = 1;
				} else if ((split[i] === 'a') && (split[i+1] === 'b')) {
					split.splice(i, 1, "c")
					split.splice(i+1, 1)
					anymore = 1;
				} else if ((split[i] === 'b') && (split[i+1] === 'a')) {
					split.splice(i, 1, "c")
					split.splice(i+1, 1)
					anymore = 1;
				} else if ((split[i] === 'b') && (split[i+1] === 'c')) {
					split.splice(i, 1, "a")
					split.splice(i+1, 1)
					anymore = 1;
				} else if ((split[i] === 'c') && (split[i+1] === 'b')) {
					split.splice(i, 1, "a")
					split.splice(i+1, 1)
					anymore = 1;
				} 
				if (anymore === 1) {
					check()
				}
			}
		}
		check()
	return split.length;
}
StringReduction('aabc')