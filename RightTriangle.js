const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});
//TODO
//As per the problem statement , it was evident that we shud not print remaining numbers
//that doesnt form a triangle.
// i.e  in eg given, the input was 20 but had numbers only till 15 as remaining numbers would not
// form a triangle
// So we have to first find out the maximum number that could be in the triangle.
// in the example 15 was that number .
// And we shud also find out how much level deep our starting number 1 is.
//TODO
//1. Find max number(n)
//2. find level deep (i)
//We know that 1+2+3+4+... pattern i.e (n+(i+1)).
//3. By using the max number and depth value print the natural numbers in increasing order.
function PrintTriangle() {
	//If there are no levels ,it is obvious that max number is 1 existing in the 0th level. So
	let n = 1;
	let i = 0;
	//Ask the user
	readline.question('Enter the number: ', (value) => {
		//Check whether user has entered valid value. If he enters text out of if loop.
		if (parseInt(value) !== NaN) {
			//Assign to a variable.
			let givenNumber = parseInt(value);
			//Loop through as per pattern as said above.
			for (i = 0; n + (i + 1) <= givenNumber; i++) {
				if (i != 0) {
					n = n + (i + 1);
				}
			}
			//console.log(n, i);// Print the values->Max number is n and triangle is i level deep.
			// divide tasks so that functions would do only single task.
			printingTriangle(n, i);
			function printingTriangle(maxNumber, levelsDeep) {
				let tempStr = '', //Temporary String to store triangle values.
					n = maxNumber, //As per parameter.
					depth = levelsDeep; //Depth
				for (let i = 1; i <= levelsDeep; i++) {
					//Iterates through levels
					tempStr = ''; // For every level this is empty string.
					for (
						let j = n;
						j > n - depth;
						j-- //Iterating over numbers that should be present in single line.
					) {
						tempStr = j + '    ' + tempStr;
					}
					//Here, n = max number in remaining depths.
					n = n - depth;
					//Decreasing depth
					depth -= 1;
					//printing out the stored temporary String. This is executes line by line i.e for each depth
					console.log(tempStr);
				}
			}
		}
		readline.close();
	});
}

PrintTriangle();
// Our idea to print triangle of max number 105 :p
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15
// 16 17 18 19 20 21
// 22 23 24 25 26 27 28
// 29 30 31 32 33 34 35 36
// 37 38 39 40 41 42 43 44 45
// 46 47 48 49 50 51 52 53 54 55
// 56 57 58 59 60 61 62 63 64 65 66
// 67 68 69 70 71 72 73 74 75 76 77 78
// 79 80 81 82 83 84 85 86 87 88 89 90 91
// 92 93 94 95 96 97 98 99 100 101 102 103 104 105
