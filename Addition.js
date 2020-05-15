const fs = require('fs');
const readline = require('readline');
async function processLineByLine() {
	let draftArray = [];
	let NoOfLevels;
	const fileStream = fs.createReadStream('INPUT.TXT');
	const rl = readline.createInterface({
		input: fileStream,
		crlfDelay: Infinity
	});
	for await (let line of rl) {
		// Each line in input.txt will be successively available here as `line`.
		line = line.split(' ');

		draftArray.push(line);
		//console.log(`Line from file: ${line}`);
	}

	console.log('The given array is ', draftArray);
	NoOfLevels = draftArray[0][0];
	let ArrayOfGreaterNumbers = [];
	let Total = 0;
	function SumOfRightDiagnolElements() {
		let sum = 0;
		let finalNumbers = [];
		for (let j = 1; j < NoOfLevels; j++) {
			let tempSum = 0,
				TempNumbers = [];
			for (let i = 1; i <= NoOfLevels; i++) {
				let length = draftArray[i].length;
				let diff = length - j;
				if (diff < 0) {
					diff = 0;
				}
				let a = parseInt(draftArray[i][diff]);
				tempSum += a;
				TempNumbers.push(a);
				//console.log(a, length);
			}
			if (sum < tempSum) {
				sum = tempSum;
				finalNumbers = [ ...TempNumbers ];
			}
		}
		if (Total < sum) {
			Total = sum;
			ArrayOfGreaterNumbers = [ ...finalNumbers ];
		}
		console.log('The highest total is', Total);
		console.log('The array which form the highest total is', ArrayOfGreaterNumbers);
	}
	//SumOfRightDiagnolElements();
	function SumOfLeftDiagnolElements() {
		let sum = 0;
		let finalNumbers = [];
		let commonNumber = parseInt(draftArray[1][0]);
		for (let j = 0; j < NoOfLevels - 1; j++) {
			let tempSum = 0,
				a,
				TempNumbers = [];
			for (let i = 2; i <= NoOfLevels; i++) {
				let length = draftArray[i].length;
				if (length == j) {
					let diff = length - 1;
					a = parseInt(draftArray[i][diff]);
					TempNumbers.push(a);
				} else {
					a = parseInt(draftArray[i][j]);
					TempNumbers.push(a);
				}
				tempSum += a;
			}
			tempSum += commonNumber;
			TempNumbers.unshift(commonNumber);

			if (sum < tempSum) {
				sum = tempSum;
				finalNumbers = [ ...TempNumbers ];
			}
		}
		//console.log(sum);
		//console.log(finalNumbers);
		if (Total < sum) {
			Total = sum;
			ArrayOfGreaterNumbers = [ ...finalNumbers ];
		}
	}

	try {
		let leftDiagnolRunFirst = await SumOfLeftDiagnolElements();
		let RightDiagnolNow = await SumOfRightDiagnolElements();
	} catch (error) {
		console.log(error);
	}
}
processLineByLine();
