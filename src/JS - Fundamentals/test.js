const arr = [3, 5, 8, 5];

const test = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		// console.log(":", arr[i]);
		for (let a = i + 1; a < arr.length; a++) {
			if (arr[i] === arr[a]) {
				console.log(":", arr[a]);
			}
		}
	}
};
// test(arr);

const allArr = (arr) => {
	let allMap = arr[0];
	let res = arr.map((el, i, arr) => (allMap *= arr[i + 1]));
	console.log(":", res[arr.length - 2]);
};
allArr(arr);

const sum = (arr) => {
	let all = arr[0];
	for (let i = 1; i < arr.length; i++) {
		all *= arr[i];
	}
	// console.log(":", all);
};
// sum(arr);

// Factorial
const reduceNums = (a) => {
	const arr = [];
	for (a; a > 0; a--) arr.push(a);

	const res = arr.reduce((acc, el) => acc * el);
	// console.log(":", res);
	return res;
};

// 5*4*3*2...

// console.log(":", reduceNums(5));

const recursive = (n) => {
	if (n === 1) {
		return 1;
	}
	let res = recursive(n - 1);
	let all = res * n;
	return all;
};

// console.log(":", recursive(5));
