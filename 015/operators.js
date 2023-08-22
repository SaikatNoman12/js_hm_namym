/** 
 * Arithmetic Operator
 * + (addition)
 * - (subtraction)
 * * (multiplication)
 * / (division)
 * % (modules)
*/
let a = 10;
let b = 20;

console.log(a + b);

console.log(b - a);

console.log(a * b);

console.log(b / a);

console.log(b % a);

/** 
 * Increment & Decrement Operator
 * Pre Increment
 * Post Increment
 * Pre Decrement
 * Post Decrement
*/
console.log(++a); // 11 

console.log(a++); // 11
console.log(a); // 12

console.log(--a); // 11

console.log(a--); // 11
console.log(a); // 10

/** 
 * Assignment Operator
 * = (Equal)
 * += (plus equal)
 * -= (minus equal)
 * *= (multiplication equal)
 * /= (division equal)
 * %= (modules equal)
*/
let c = 20;
let d = 30;

c += d;

c -= d;

c *= d;

c /= d;

c %= d;

/** 
 * Comparison Operator
 * == (double equal) --> true
 * === (tipple equal) --> false
 * > (getter then) --> false
 * < (less then) --> true
 * >= (getter then equal) --> true
 * <= (less then equal) --> true
 * != (not equal) --> false
 * !== (not equal equal) --> true
*/
console.log(50 == '50'); 

console.log(50 === '50');

console.log(10 > 20);

console.log(10 < 20);

console.log( 20 >= 20);

console.log(10 <= 20);

console.log(20 != '20');

console.log(20 !== '20');

/** 
 * Logical Operator
 * && (and operator) false
 * || (or operator) true
 * ! (operator) --> false
*/
console.log(true && false);

console.log(true || false);

console.log(!true);

/** 
 * Bitwise Operator
 * & (and) 
 * | (or)
 * ~ (not)
 * ^ (x-or)
 * << (left shift)
 * <<< (Zero fill left shift)
 * >> (right shift)
 * >>> (Zero fill right shift)
*/
console.log(9 & 1); //--> 1
console.log(9 & 0); //--> 0
console.log(8 & 1); //--> 0
console.log(8 & 0); //--> 0

console.log(2 | 1); //--> 3
console.log(2 | 0); //--> 2
console.log(5 | 1); //--> 5
console.log(5 | 0); //--> 5

console.log(~ 5); //--> -6 
console.log(~ -6); //--> 5

console.log(7 ^ 1); //--> 6
console.log(7 ^ 0); //--> 7
console.log(6 ^ 1); //--> 7 
console.log(6 ^ 0); //--> 6

console.log(7 << 1); //--> 14
console.log(7 << 0); //--> 7

console.log(7 >> 1); //--> 3
console.log(9 >> 1); //--> 4
console.log( >> 0); //--> 7

console.log(12 >>> 1); //--> 6
console.log(17 >>> 1); //--> 8
console.log(7 >>> 0); //--> 7

