const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = numbers.map((num) =>{return num * 10;}).filter((num)=>num<50)
console.log(result)