export const findNextNumber = (nums, n) => {
	if (nums === undefined) throw new Error('nums is required');
	if (n === undefined) throw new Error('n is required');
	// Your code here!
	let indexofNumber = nums.indexOf(n);
	let indexOfNextNumber = indexofNumber + 1;
	if (indexofNumber < 0 || indexofNumber === nums.length - 1) {
		return null;
	} else {
		return nums[indexOfNextNumber];
	}
};


export const count1sand0s = (str) => {
	if (str === undefined) throw new Error('str is required');
	// Your code here!
	let counterfor1 = 0;
	let counterfor0 = 0;
	const object = {
		1: 0,
		0: 0
	};

	for (let i = 0; i < str.length; i++) {
		if (str[i] === '1') {
			counterfor1++;
		} else {
			counterfor0++;
		}
	}
	object[1] = counterfor1;
	object[0] = counterfor0;
	return object;
};

export const reverseNumber = (n) => {
	if (n === undefined) throw new Error('n is required');
	// Your code here!
	let result = Number(String(n).split('').reverse().join(''));
	return result;


};

export const sumArrays = (arrs) => {
	if (arrs === undefined) throw new Error('arrs is required');
	// Your code here!
	let total = 0;
	arrs.forEach(a => {
		a.forEach(n => {
			total += n;
		})
	});
	return total;
};

export const arrShift = (arr) => {
	if (arr === undefined) throw new Error('arr is required');
	// Your code here!
	let lastNumber = arr.length - 1;
	const temp = arr[0];
	arr[0] = arr[lastNumber];
	arr[lastNumber] = temp;
	return arr;
};

export const findNeedle = (haystack, searchTerm) => {
	if (haystack === undefined) throw new Error('haystack is required');
	if (searchTerm === undefined) throw new Error('searchTerm is required');
	// Your code here!
	let object = JSON.stringify(haystack).toLowerCase();
	return object.includes(searchTerm.toLowerCase());
};

export const getWordFrequencies = (str) => {
	if (str === undefined) throw new Error('str is required');
	// Your code here!
	let noPunctStr = str.replace(/[?.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");

	let array = noPunctStr.toLowerCase().split(" ");
	const obj = {};

	array.forEach(word => {
		obj[word] = (obj[word] || 0) + 1;

	});

	return obj;

}
