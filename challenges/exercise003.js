import { capitalize } from "./exercise001";

export function getSquares(nums) {
	if (nums === undefined) throw new Error('nums is required');
	// Your code here!
	const numsSquared = [];
	if (nums.length === 0) {
		return [];
	} else {
		for (let i = 0; i < nums.length; i++) {
			const num = nums[i];
			numsSquared.push(num * num);
		}
		return numsSquared;
	}
}


export function camelCaseWords(words) {
	if (words === undefined) throw new Error('words is required');
	// Your code here!
	let firstWord = "";
	let capitalize = "";
	let total = "";
	for (let i = 0; i < words.length; i++) {
		const value = words[i];
		if (i === 0) {
			firstWord = value;
		} else if (i > 0) {
			capitalize += value.substring(0, 1).toUpperCase() + value.substring(1, value.length);
		}
		total = firstWord + capitalize;
	}
	return total;
}


export function getTotalSubjects(people) {
	if (people === undefined) throw new Error('people is required');
	// Your code here!
	let count = 0;
	for (const p of people) {
		if (p.subjects.length > 0) {
			count += p.subjects.length;
		}
	}
	return count;
}


export function checkIngredients(menu, ingredient) {
	if (menu === undefined) throw new Error('menu is required');
	if (!ingredient) throw new Error('ingredient is required');
	// Your code here!
	let count = 0;

	for (const m of menu) {
		if (m.ingredients.includes(ingredient) === true) {
			count++;
		}
	}

	if (count > 0) {
		return true;
	} else {
		return false;
	}

}

export function duplicateNumbers(arr1, arr2) {
	if (arr1 === undefined) throw new Error('arr1 is required');
	if (arr2 === undefined) throw new Error('arr2 is required');
	// Your code here!

	let duplicate = [];

	for (let i = 0; i < arr1.length; i++) {
		if (arr2.includes(arr1[i])) {
			duplicate.push(arr1[i]);
		}
	}
	duplicate.sort(function (a, b) { return a - b });
	return duplicate.filter((item,
		index) => duplicate.indexOf(item) === index);

}
