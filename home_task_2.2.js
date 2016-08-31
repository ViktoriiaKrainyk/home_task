console.log("---------attempt4_Vika--------------");
var text = "student study english\nstudent study math\nstudent study Music\n" +
"teacher teaches Ecology\nteacher teaches Math\nteacher teaches Physics" +
"\nteacher playing football\nstudent teaches Math";

text = text.split('\n').map(function(currElem, index, array) {
	return currElem.split(' ');
}).reduce(function(init, next, index) {
	if (!init[next[0]]) {
		init[next[0]] = {[next[1]]: []};
	}else if (!init[next[0]][next[1]]){
		init[next[0]][next[1]] = [];
	}
		init[next[0]][next[1]].push(next[2]);
	return init;
}, {});
console.log(text);
