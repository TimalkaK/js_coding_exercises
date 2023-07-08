export function getFillings(sandwich) {
	if (sandwich === undefined) throw new Error('ingredients is required');
	// Your code here!
	return sandwich.fillings;
}

export function isFromManchester(person) {
	if (person === undefined) throw new Error('person is required');
	// Your code here!
	if (person.city === 'Manchester') {
		return true;
	} else {
		return false;
	}
}

export function getBusNumbers(people) {
	if (people === undefined) throw new Error('people is required');
	// Your code here!
	let busNumber = people / 40;
	if (people > 40 && people % 40 === 0) {
		return busNumber;
	} else if (people > 40 && people % 40 !== 0) {
		//console.log(Math.floor(busNumber + 1));
		return Math.floor(busNumber + 1);
	} else {
		return 1;
	}
}

export function countSheep(arr) {
	if (arr === undefined) throw new Error('arr is required');
	// Your code here!
	let count = 0;
	arr.forEach(animal => {
		if (animal === 'sheep') {
			count++;
		}
	})
	return count;
}

export function hasMPostCode(person) {
	if (person === undefined) throw new Error('person is required');
	// Your code here!
	let pCode = person.address.postCode;
	if (pCode.charAt(0) === 'M' && person.address.city === 'Manchester') {
		return true;
	} else {
		return false;
	}


}

