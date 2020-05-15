//In this problem, first we shud read input from the file, the first line is no of rows.

const fs = require('fs');
//Reading line
const readline = require('readline');
async function processLineByLine() {
	let draftArray = [];
	//Draft Array is the array we will store our values in from the file.
	let NoOfLevels; // Indicates the depth
	const fileStream = fs.createReadStream('INPUT.TXT'); // Reading input
	const rl = readline.createInterface({
		input: fileStream,
		crlfDelay: Infinity
	});
	for await (let line of rl) {
		// Each line in input.txt will be successively available here as `line`.
		line = line.split(' ');
		//Splitting coz input contains space, so replacing space to comma separated.

		draftArray.push(line);
		//pushing value to our arrray.
		//console.log(`Line from file: ${line}`);
	}
	//console.log('The given array is ', draftArray); //Displaying...
	NoOfLevels = draftArray[0][0];
	//We know that first line indicates depth
	let ArrayOfGreaterNumbers = []; // This is our array to be displayed after our operation
	let Total = 0; // This is our total sum to be displayed after our operation.
	function SumOfRightDiagnolElements() {
		let sum = 0;
		let finalNumbers = []; //Indicates nos which adds up to sum.
		//Pseudo code :
		// observing the pattern 1[0] + 2[1] + 3[2] + 4[3];
		// 1st array has 1 number, 2nd has 2 , 3rd has 3 , 4th  has 4. -> (array.length -1) pattern identified.
		for (let j = 1; j < NoOfLevels; j++) {
			//Our approach is length -1 so j is initiated to 1.
			let tempSum = 0,
				TempNumbers = [];
			for (let i = 1; i <= NoOfLevels; i++) {
				//Array incrementing till last level
				let length = draftArray[i].length;
				let diff = length - j;
				//whenever diff becomes negative we get NaN , this occurs when length < j , in that case we need first element
				if (diff < 0) {
					diff = 0;
				}
				let RequiredNumber = parseInt(draftArray[i][diff]);
				//Add to sum
				tempSum += RequiredNumber;
				TempNumbers.push(RequiredNumber);
				//console.log(RequiredNumber, length);
			}
			//Checking whether this is the greatest within this rightdiagnol method
			if (sum < tempSum) {
				sum = tempSum;
				finalNumbers = [ ...TempNumbers ];
			}
		}
		//Competing with left diagnol
		if (Total < sum) {
			Total = sum;
			ArrayOfGreaterNumbers = [ ...finalNumbers ];
		}
		console.log('The highest total is', Total);
		console.log('The array which form the highest total is', ArrayOfGreaterNumbers);
	}
	//SumOfRightDiagnolElements();
	function SumOfLeftDiagnolElements() {
		//Observing the pattern 1[0], 2[0], 3[0], 4[0] then 1[0], 2[1], 3[1], 4[1]
		// 1[0], 2[1], 3[2], 4[2]. -> 1[0] is common j value is incrementing. take care when length == j
		let sum = 0;
		let finalNumbers = [];
		let commonNumber = parseInt(draftArray[1][0]); //comon that gets added to every no.
		for (let j = 0; j < NoOfLevels - 1; j++) {
			let tempSum = 0,
				a,
				TempNumbers = [];
			for (let i = 2; i <= NoOfLevels; i++) {
				// As we took out common no , we can start from 2
				let length = draftArray[i].length;
				if (length == j) {
					// important check here. in eg 2[2] is NaN
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
			//update
			if (sum < tempSum) {
				sum = tempSum;
				finalNumbers = [ ...TempNumbers ];
			}
		}
		//console.log(sum);
		//console.log(finalNumbers);
		//Check with total
		if (Total < sum) {
			Total = sum;
			ArrayOfGreaterNumbers = [ ...finalNumbers ];
		}
	}
	//Controlling which one to perform first.As  We have single source of truth
	try {
		let leftDiagnolRunFirst = await SumOfLeftDiagnolElements();
		let RightDiagnolNow = await SumOfRightDiagnolElements();
	} catch (error) {
		console.log(error); //Will not execute at all
	}
}
processLineByLine();
//
//Ensure you download with Input text file. and then
//Run command in terminal : node Addition
