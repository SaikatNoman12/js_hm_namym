/** 
 * Octal and Hexadecimal numbers.
 * Convert octal to decimal number.
 * Convert decimal to octal number.
 * Convert hexadecimal to decimal number.
 * Convert decimal to hexadecimal number.
*/
const octalNum = 1071; 
console.log(Number.parseInt(octalNum, 8));

const octalNum2 = 5469;
console.log(+octalNum2.toString(8));

const hexNum = 0xff;
console.log(hexNum);

const hexNum2 = 2423;
console.log(+hexNum2.toString(16)); 

const hexNum3 = 'fff';
console.log(Number.parseInt(hexNum3, 16));