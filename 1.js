'use strict';

for (let x = 0; x <= 10; x++) {
	if (x == 0){
		console.log(x + ' - это ноль');
	} else if (x % 2 == 0) {
		console.log(x+ ' - это четное число');
	} else {
		console.log(x + ' это не четное число');
	}
}