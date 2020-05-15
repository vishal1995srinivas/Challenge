const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});
//TODO
//
function PrintTriangle() {
	let n = 1;
	let i = 0;
	readline.question('Enter the number: ', (value) => {
		if (parseInt(value) !== NaN) {
			let givenNumber = parseInt(value);
			for (i = 0; n + (i + 1) <= givenNumber; i++) {
				if (i != 0) {
					n = n + (i + 1);
				}
			}
			//console.log(n, i);
			printing(n, i);
			function printing(maxNumber, levelsDeep) {
				var tempStr = '',
					n = maxNumber,
					i,
					depth = levelsDeep;
				for (i = 1; i <= levelsDeep; i++) {
					tempStr = '';
					for (let j = n; j > n - depth; j--) {
						tempStr = j + '    ' + tempStr;
					}
					n = n - depth;
					depth -= 1;
					console.log(tempStr);
				}
			}
		}
		readline.close();
	});
}

PrintTriangle();

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
