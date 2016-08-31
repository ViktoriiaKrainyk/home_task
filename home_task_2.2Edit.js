// console.log("---------attempt4_Stas--------------");
// var text = "student study english\nstudent study math\nstudent study Music\n" +
//     "teacher teaches Ecology\nteacher teaches Math\nteacher teaches Physics" + "\nteacher playing football\nstudent teaches Math\nI'm learning JS";
// var text = text.split('\n').map(function(currElem, index, array) {
//         return currElem.split(' ')
//     }).reduce(function(init, next, index) {
//         if (!init[next[0]]) {
//             init[next[0]] = {[next[1]]: []};
//         } else if (!init[next[0]][next[1]]) {
//             init[next[0]][next[1]] = [];
//         }
//         init[next[0]][next[1]].push(next[2])
//         return init;
//     }, {});
// console.log(text);



// console.log("---------attempt Bohdan--------------");
// var text = "student study english\nstudent study math\nstudent study Music\n" +
//     "teacher teaches Ecology\nteacher teaches Math\nteacher teaches Physics" + "\nteacher playing football\nstudent teaches Math\nI'm learning JS";
// var splitText = text.split('\n');
// var result = {};
// splitText.forEach(function(item, index) {
//     var stringParts = item.split(' ');
//     var who = stringParts[0];
//     var whatDoing = stringParts[1];
//     var subject = stringParts[2];
//     if (!result[who]) {
//         result[who] = {};
//     }
//     if (!result[who][whatDoing]) {
//         result[who][whatDoing] = [];
//     }
//     result[who][whatDoing].push(subject);
// });
// console.log(result);


console.log("---------attempt Gleb--------------");
var members = "student study english\nstudent study math\nstudent study Music\n" +
    "teacher teaches Ecology\nteacher teaches Math\nteacher teaches Physics"+
    "\nteacher playing football\nstudent teaches Math\nI'm learning JS";
	var school = members.trim().split("\n").map(function(item) {
		return item.split(" ");
	}).reduce(function(human, curr, index) {
		var does = human[curr[0]] || {};
		does[curr[1]] = does[curr[1]] || [];
		does[curr[1]].push(curr[2]);
		human[curr[0]] = does;
		return human;
	}, {});
console.log(school);

