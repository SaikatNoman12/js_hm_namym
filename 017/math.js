/** 
 * JAVASCRIPT MATH OBJECT
 * Math.E
 * Math.PI
 * Math.abs(value)
 * Math.floor(value)
 * Math.ceil(value)
 * Math.round(value)
 * Math.min(value, value, value)
 * Math.max(value, value, value)
 * Math.pow(value, power)
 * Math.sqrt(value)
 * Math.random()
 * shuffle array 
*/

console.log(Math.E);

console.log(Math.PI);

const num = 4.364;

console.log(Math.abs(num));

console.log(Math.floor(num));

console.log(Math.ceil(num));

console.log(Math.round(num));

console.log(Math.min(100, 300, 200, 200));

console.log(Math.max(100, 300, 200, 200));

console.log(Math.pow(10, 2));

console.log(Math.sqrt(100));

console.log(Math.random());

console.log(Math.floor(Math.random() * 50 + 1));

const arr = [1,2,3,4,56,7,8,13];
const shuffleArr = arr.sort(function(){
    return Math.random() - 0.6;
})

console.log(shuffleArr);