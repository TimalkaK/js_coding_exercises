export function findSmallNums(nums) {
	if (!nums) throw new Error('nums is required');
	// Your code here

	let smallNums = [];

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] < 1) {
			smallNums.push(nums[i]);
		}
	}
	return smallNums;
}

export function findNamesBeginningWith(names, char) {
	if (!names) throw new Error('names is required');
	if (!char) throw new Error('char is required');
	// Your code here
	let nameBeginningWith = [];

	names.forEach(name => {
		if (name.charAt(0) === char) {
			nameBeginningWith.push(name);
		}
	})
	return nameBeginningWith;
}

export function findVerbs(words) {
	if (!words) throw new Error('words is required');
	// Your code here
	let verbs = [];

	words.forEach(word => {
		if (word.includes("to ")) {
			verbs.push(word);
		}
	})
	return verbs;
}

export function getIntegers(nums) {
	if (!nums) throw new Error('nums is required');
	// Your code here
	let integers = [];

	nums.forEach(n => {
		if (n % 1 === 0) {
			integers.push(n);
		}
	})
	return integers;
}

export function getCities(users) {
	if (!users) throw new Error('users is required');
	// Your code here
	let cities = [];
	users.forEach(user => {
		let city = user.data.city.displayName;
		cities.push(city);
	})
	return cities;
}

export function getSquareRoots(nums) {
	if (!nums) throw new Error('nums is required');
	// Your code here
	const squareRoot = [];
	nums.forEach(n => {
		let root = Math.round(Math.sqrt(n) * 100) / 100;
		squareRoot.push(root);
	})
	return squareRoot;
}


export function findSentencesContaining(sentences, str) {
	if (!sentences) throw new Error('sentences is required');
	if (!str) throw new Error('str is required');
	// Your code here
	const s = [];
	sentences.forEach(sentence => {
		let lowerCaseSentence = sentence.toLowerCase();
		if (lowerCaseSentence.includes(str)) {
			s.push(sentence);
		}
	})
	return s;
}

export function getLongestSides(triangles) {
	if (!triangles) throw new Error('triangles is required');
	// Your code here
	const longestSides = [];
	triangles.forEach(triangle => {
		longestSides.push(Math.max(...triangle));
	})
	return longestSides;
}
