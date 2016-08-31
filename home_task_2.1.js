// console.log('----------home task 2.1.1----------')
// var arr = [1, 6, 7, 8, 4, 7];
// var test = arr.reduce(function(init, next, index) {
// 	console.log(init, next);
// 	var item = init.length ? next + init[index - 2] : next;
// 	init.push(item);
// 	return init;
// }, []);
// console.log(test);


// //переписаная в соответствии с if
// console.log('----------home task 2.1.2----------')
// var arr = [1, 6, 7, 8, 4, 7];
// var test = arr.reduce(function(init, next, index) {
// 	// console.log(init, next);
// 	var item;
// 	if (init.length) {
// 		item = init[index - 1] + next;
// 	} else {
// 		item = next; //if - переписать
// 	}
// 	init.push(item);
// 	return init;
// }, []);
// console.log(test);



// console.log('----------home task 2.1.3----------')
// var s = 0;
// var myArray = [1, 6, 7, 8, 4, 7];
// var sum = myArray.reduce(function(initValue, nextValue, index, array) {
// 	console.log(initValue, nextValue);
// 	s += nextValue;
// 	initValue.push(s);
// 	return initValue;
// }, []);
// console.log(sum);
