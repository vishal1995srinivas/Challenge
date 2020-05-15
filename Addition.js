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

	console.log(draftArray);
	NoOfLevels = draftArray[0][0];
	function SumOfRightDiagnolElements() {
		let sum = 0;
		for (let j = 1; j < NoOfLevels; j++) {
			let tempSum = 0;
			for (let i = 1; i <= NoOfLevels; i++) {
				let length = draftArray[i].length;
				let diff = length - j;
				if (diff < 0) {
					diff = 0;
				}
				let a = parseInt(draftArray[i][diff]);
				tempSum += a;
				console.log(a, length);
			}
			if (sum < tempSum) {
				sum = tempSum;
			}
			console.log(tempSum);
			// console.log(tempSum);
		}
		console.log(sum);
	}
	SumOfRightDiagnolElements();
}
processLineByLine();
