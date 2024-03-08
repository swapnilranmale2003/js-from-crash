// const temprature = 10;
// if(temprature>40)
// {
//     console.log("temprature is greater han 50");
// }
// else{
// console.log("temprature is less than 50")
// }

// <, >, <=, >=, ==, ===, !=, !==
/*
const score = 200;
if(score>100){
    var power = "fly";   //var is global scope 
    console.log(`power fly:${power} `);
}
console.log(`power fly:${power} `);
*/

// const score = 200;
// if(score>100){
//     let power = "fly";   //var is global scope 
//     console.log(`power fly:${power} `);
// }

//shorthand notation
/*
const balance = 1000;
if(balance>500) console.log("test")
*/

const userLoggedIn = true
const debitCard = true

if(userLoggedIn && debitCard)
{
    console.log("Allow to buy courses");
}

const loggedInFromGoogle = true
const loggedInFromEmail = false
if(loggedInFromEmail||loggedInFromGoogle){
    console.log("Logged in")
}