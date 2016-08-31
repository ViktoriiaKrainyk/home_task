console.log( '_______Task_1______');
function Factory() {
	var result = {};
	result.sum = function(a, b) {
		return a + b;
	};
	result.diff = function(a, b) {
		return a - b;
	};
	result.div = function(a, b) {
		return a / b;
	};
	result.mul = function(a, b) {
		return a * b;
	};
	result.powTwo = function(a) {
		return a * a;
	};
	result.pow = function(a, b) {
		var num = a;
		for (var i = 1; i < b; i++){
			num *= a;
		};
		return num;
	};
	result.log = function(a) {
		return Math.log(a);
	};
	result.squareRoot =  function(a) {
		return Math.sqrt(a);
	};
	result.cubeRoot = function(a) {
		return Math.cbrt(a);
	};
	return result;
};

var test = Factory();
console.log(test.powTwo(5));


console.log( '_______Task_2.2______');
Array.prototype.inArray = function(value) {
	var some = this.some(function(elem){
		return elem === value;
	});
	return some;
};

var mass = [1, 5, 9, 7, 3];
console.log(mass.inArray(5));

console.log( '_______Task_2.1______');
var MyArray = function() {};
MyArray.prototype.arr = [1, 5, 9, 7, 3];
MyArray.prototype.inArray = function(value) {
	var some = this.arr.some(function(elem){
		return elem === value;
	});
	return some;
};
var mass = new MyArray();

console.log(mass.inArray(2));
