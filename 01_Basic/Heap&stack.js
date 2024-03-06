let myChannelName="xyz";
let anotherName= myChannelName;
// console.log(anotherName)

//Heap Memory
const userOne ={
    name : "qwerty",
    email :"xyz@gmail.com"

}
const userTwo = userOne;
userTwo.email= "swapnil@thinkitive.com";

console.log(userOne.email)
console.log(userTwo.email)