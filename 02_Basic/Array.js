//Deep Copy 
//Shallow copy

const myArray = [0,1,2,3,4];
// console.log(myArray[1])
myArray.push(5);
console.log(myArray)

myArray.unshift(15);
console.log(myArray)

// myArray.pop();
// console.log(myArray)

// myArray.shift();
// console.log(myArray)

console.log(myArray.includes(2));


const newArray = myArray.join();
console.log(myArray)
console.log(newArray)
console.log(typeof newArray)

