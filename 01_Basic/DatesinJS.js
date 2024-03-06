const myDate = new Date();
console.log(myDate.toString())

console.log(myDate.toISOString())

console.log(myDate.toJSON())

console.log(myDate.toLocaleDateString())

console.log(myDate.toLocaleString())


// const myCreateDate = new Date(2023, 0, 23);
// console.log(myCreateDate.toDateString())



const myCreateDate = new Date("1-14-2023");
console.log(myCreateDate.toLocaleString())

const myTimeStamp = Date.now();
console.log(myTimeStamp)

const month = new Date();
console.log(month)
console.log(month.getMonth()+1) //month from 0

console.log(month.getDay())  //Day start from 1
