function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		let element = arr[i];
		if (element > max) {
			max = element;
		}
		if (element < min) {
			min = element;
		}
		sum += element;
	}
	let avg = (arr.length > 0) ? Number((sum / arr.length).toFixed(2)) : 0;
	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	if (!arr || arr.length === 0) {
		return 0;
	}
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

function differenceMaxMinWorker(...arr) {
	if (!arr || arr.length === 0) {
		return 0;
	}
	let max = Math.max(...arr);
	let min = Math.min(...arr);
	return max - min;

}

function differenceEvenOddWorker(...arr) {
	if (!arr || arr.length === 0) {
		return 0;
	}
	let sumEvenElement = 0;
	let sumOddElement = 0;
	for (let element of arr) {
		if (element % 2 === 0) {
			sumEvenElement += element;
		} else {
			sumOddElement += element;
		}
	}

	return sumEvenElement - sumOddElement;

}

function averageEvenElementsWorker(...arr) {
	if (!arr || arr.length === 0) {
		return 0;
	}
	let sumEvenElement = 0;
	let countEvenElement = 0;
	for (const element of arr) {
		if (element % 2 === 0) {
			sumEvenElement += element;
			countEvenElement++;
		}
	}
	return countEvenElement > 0 ? sumEvenElement / countEvenElement : 0;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		const currentResult = func(...arrOfArr[i]);
		if (currentResult > maxWorkerResult) {
			maxWorkerResult = currentResult;
		}
	}
	return maxWorkerResult;
}