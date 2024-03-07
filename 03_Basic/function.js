const Hello = () => {
    console.log("Hello World");
}
// Hello();

function Sunny(params) {
    console.log("S");
    console.log("U");
    console.log("N");
    console.log("Y");
}
// Sunny();

// const sayName = () => {
//     console.log("S");
//     console.log("U");
//     console.log("N");
//     console.log("Y");
// }

// sayName();


function add(number1, number2)//parameter 
{
    console.log(number1 + number2)
}
add(1, 2)//arguments

// function add(number1, number2) {
//     console.log(number1+number2)
//  }
//  const res = add(1,2);
//  console.log(res)

// function add(number1, number2) {  //using variable
//    let res = number1+number2;
//    return res;
// }
// const res = add(1, 2);
// console.log("result", res)


function add(number1, number2) {  //using variable
    return number1+number2;
 }
 const res = add(1, 2);
//  console.log("result", res)

//String interpolation in function 
function loginUserMessage(username = "sam") {
    if(username != undefined)
    {
    return `${username} just logged in`;
    }
    else{
        console.log("user does not exist");
    }

}
console.log(loginUserMessage("kokkky"));