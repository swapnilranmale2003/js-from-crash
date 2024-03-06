//Numbers
const balance = new Number(1000);
console.log(typeof(balance))
console.log(balance)

console.log(balance.toString().length)

// console.log(balance.toFixed(3))   //decimal point

const otherNumber = 1234.899; 
// console.log(otherNumber.toPrecision(4)) //precision value

const hundreds = 100000000;
// console.log(hundreds.toLocaleString('en-IN'))
  
// Math

const number = -9;
console.log(Math.abs(number))
console.log(Math.floor(9.6))
console.log(Math.ceil(9.6))

console.log(Math.round(9.4))
console.log(Math.round(9.5))

console.log(Math.random())
console.log(Math.floor(Math.random()*10))

const min = 10;
const max = 20;

console.log(Math.floor(Math.random () * ((max-min)+1))+min)