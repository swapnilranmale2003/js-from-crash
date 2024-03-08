// let a = 10;
// const b = 20;
// var c = 30;


// console.log(a);
// console.log(b);
// console.log(c);

// function getData(){
// console.log(a);
// console.log(b);
// console.log(c);
// }
// getData();
/*
if (true) {
    let a = 10;
    const b = 20;
    var c = 30;

}
console.log(a);
console.log(b);
console.log(c);

*/

//Scope inside function
/*
function one(){
    const username = "sunny";
    function two(){
        const websiteName = "coupons code";
        console.log(username)
    }
    //console.log(websiteName);
    two();
}
one();

*/

// if(true){
//     const username = "maxwell";
//     if(username==="maxwell"){
//         const websiteName = "youtube";
//         console.log(username+" " +websiteName)
//     }
//     // console.log(websiteName)
// }
// console.log(username)
console.log(addOne(5))
function addOne(num){
    return num+1;
}

const addTwo = function(num){
    return num+1;
}
console.log(addTwo(4))
