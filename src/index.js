/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */

module.exports = function getLoveTrianglesCount(preferences = []) {

	let count = 0;

	for(let i = 0, len = preferences.length; i <= len; i++) {
		const firstPos = preferences[i];
		const secondPos = preferences[firstPos - 1];
		const thirdPos = preferences[secondPos - 1];

		const conditionOne = thirdPos === i + 1;
		const conditionTwo = firstPos !== i + 1;

		if (conditionOne && conditionTwo) {
			count++;
		}
		
	}

	return count / 3;

}
