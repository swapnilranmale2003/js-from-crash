/*
const user = {
    userName: "hitesh",
    price: 1999,
    welcome: function () {
        console.log(`hey ${this.userName} price ${this.price}`);
        console.log(this)  //refere the current context!
    }
}
user.welcome()
user.userName = "Mark";
user.welcome()
console.log(this)

*/

// const user = {
//     username: "kanndy"
// }
// function chai() {
//     // const username = "swapnil"
//     console.log(user.username)
    
// }
// chai()

// function chai() {
//     let username = "swapnil";
//     console.log(this.username)
// }
// chai()


// const chai =()=> {
//     let username = "swapnil";
//     console.log(this.username)
// }
// chai()

// const addTwo = (num1, num2)=>{
//     return num1+num2;
// }
// console.log(addTwo(2,3))

//implicite return

// const addTwo = (num1, num2)=>num1+num2;
// console.log(addTwo(2,3))

const addTwo = (num1, num2)=>({name:"elephant"});
console.log(addTwo(2,3))

// const myArr = [1,2,3,4,5,6];
// const newArr = [34,56];
// const newes=[];
// console.log(...newes,...newArr)
// console.log(newes)