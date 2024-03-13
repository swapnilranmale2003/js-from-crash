//reduce
// const array1 = [1, 2, 3, 4];
// const total = 0;

// const sum = array1.reduce(
//     (a, b) => a + b,
//     total,
// );
// console.log(sum);

const numbers = [10,20,30];
const initialValue=0;
const sum = numbers.reduce((ac, currentvalue)=>ac+currentvalue,initialValue)
console.log(sum)