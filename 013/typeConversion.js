/** 
 * JavaScript Type Conversion
 * What is type conversion?
 * Create string type variable.
 * Create number type variable.
 * Convert string to number.
 * Convert number to string.
 * Boolean convert to string.
 * Boolean convert to number.
 * JavaScript falsy value.
  * ''
  * 0
  * undefined
  * null
  * NaN  
*/
const strNum = '10000';
console.log(strNum);


const num = 10;
console.log(num);


console.log(+strNum);
console.log(strNum * num);
console.log(Number(strNum));
console.log(Number.parseInt(strNum));
console.log(Number.parseFloat(strNum));


console.log(String(num));
console.log('' + num);
console.log(num + strNum);
console.log(num.toString());


const boolStr = false;
console.log(String(true));
console.log(boolStr.toString());


console.log(Number(boolStr));
console.log(Number(true));


console.log(Boolean(''));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
