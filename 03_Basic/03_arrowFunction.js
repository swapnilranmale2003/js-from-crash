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

const user = {
    username: "kanndy"
}
function chai() {
    // const username = "swapnil"
    console.log(user.username)
    
}
chai()

function chai() {
    let username = "swapnil";
    console.log(this.username)
}
chai()


const chai =()=> {
    let username = "swapnil";
    console.log(this.username)
}
chai()

