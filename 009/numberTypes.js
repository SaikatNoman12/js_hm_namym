/** 
 * What is number type data.
 * Number data type.
 * Integer number.
 * Float number. 
 * Convert string Number to normal Number.
 * Convert Floating number.
 * Convert Integer number.
 * Get Infinity number
 * Get NaN.
 * Convert number to string.
 * Number do not accept character string value.
*/

console.log(34);

console.log(34.65);

console.log(Number('101'));

const fNumber = '302.42';
console.log(Number.parseFloat(fNumber));
console.log(Number.parseInt(fNumber));

console.log(1/0); // Infinity

console.log('abc' * 100); // NaN

console.log(String(302)); // '302'(string)

console.log(Number('abs')); // NaN