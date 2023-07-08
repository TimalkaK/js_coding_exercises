// 👉 	Each function below has some test cases in `exercise001.test.js`
// 		You can run these tests with `npm test`.
//  	All the test cases must pass for each function.

// Note: Be sure to read the corresponding .md file for each exercise, in the docs folder. 📘 👍

export function capitalize(word) {
	if (word === undefined) throw new Error('word is required');
	// Add your code here!
	return word.substring(0, 1).toUpperCase() + word.substring(1, word.length);
}

export function generateInitials(firstName, lastName) {
	if (firstName === undefined) throw new Error('firstName is required');
	if (lastName === undefined) throw new Error('lastName is required');
	// Add your code here!
	return firstName.substring(0, 1) + "." + lastName.substring(0, 1);
}

export function addVAT(originalPrice, vatRate) {
	if (originalPrice === undefined)
		throw new Error('originalPrice is requied');
	if (vatRate === undefined) throw new Error('vatRate is required');
	// Add your code here!
	let convertedPrice = originalPrice * 100;
	return Math.round(convertedPrice + convertedPrice * (vatRate / 100)) / 100;
}

export function getSalePrice(originalPrice, reduction) {
	if (originalPrice === undefined)
		throw new Error('originalPrice is required');
	if (reduction === undefined) throw new Error('reduction is required');
	// Add your code here!
	let convertedPrice = originalPrice * 100;
	return Math.round(convertedPrice - (convertedPrice * (reduction / 100))) / 100;
}

export function getMiddleCharacter(str) {
	if (str === undefined) throw new Error('str is required');
	// Add your code here!
	let middle = str.length / 2;
	if (str.length % 2 === 0) {
		return str.substring(middle - 1, middle + 1);
	} else {
		let oddMiddle = middle - 0.5;
		return str.substring(oddMiddle, oddMiddle + 1);
	}
}

export function reverseWord(word) {
	if (word === undefined) throw new Error('word is required');
	// Add your code here!
	let reverseWord = "";
	for (let i = word.length - 1; i >= 0; i--) {
		reverseWord += word[i];
	}
	return reverseWord;
}

export function reverseAllWords(words) {
	if (words === undefined) throw new Error('words is required');
	// Add your code here!
	// use for each 
	const reverseWords = [];
	words.forEach(word => {
		let reverseWord = "";
		for (let i = word.length - 1; i >= 0; i--) {
			reverseWord += word[i];
		}
		reverseWords.push(reverseWord);
	});
	return reverseWords;
}

export function countLinuxUsers(users) {
	if (users === undefined) throw new Error('users is required');
	// Add your code here!
	let count = 0;
	for (const user of users) {
		if (user.type === "Linux")
			count++;
	}
	return count;
}

export function getMeanScore(scores) {
	if (scores === undefined) throw new Error('scores is required');
	// Add your code here!
	let sumOfScores = 0;
	let numberOfScores = 0;
	for (const score in scores) {
		numberOfScores++;
		const num = scores[score];
		sumOfScores += num;
	}

	let meanScore = sumOfScores / numberOfScores;

	return Math.round(meanScore * 100) / 100;
}

export function simpleFizzBuzz(n) {
	if (n === undefined) throw new Error('n is required');
	// Add your code here!
	if (n % 3 === 0 && n % 5 === 0) {
		return "fizzbuzz"
	} else if (n % 3 === 0) {
		return "fizz";
	} else if (n % 5 === 0) {
		return "buzz";
	} else {
		return n;
	}
}
