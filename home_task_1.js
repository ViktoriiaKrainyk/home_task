var evenNum = [],
	oddNum = [];
for (var i = 0; i <= 100; i++) {
	if(i % 2 == 0) {
		evenNum.push(i);
	}else {
		oddNum.push(i);
	};
};
console.log(evenNum);
console.log(oddNum);
