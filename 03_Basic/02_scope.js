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