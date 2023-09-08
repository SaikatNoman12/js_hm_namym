/** 
 * OCTAl AND HEXADECIMAL NUMBERS
 * Convert octal to decimal number.
 * Convert decimal to octal number.
 * Convert hexadecimal to decimal number.
 * Convert decimal to hexadecimal number.
 * Convert hexadecimal to decimal number.
*/
const octalNum = 1071; // octal
console.log(Number.parseInt(octalNum, 8)); // 569

const octalNum2 = 5469; // decimal
console.log(+octalNum2.toString(8)); // 12535

const hexNum = 0xff; // hexadecimal
console.log(hexNum); // 255

const hexNum2 = 255; // decimal
console.log(hexNum2.toString(16)); // ff

const hexNum3 = 'fff54'; // hexadecimal
console.log(Number.parseInt(hexNum3, 16)); // 1048404