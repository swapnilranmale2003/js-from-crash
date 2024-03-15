// 1st Solution

// const grayClick = () => {
//     console.log("You clicked on gray button");
//     document.body.style.backgroundColor = "gray";
// }
// const whiteClick = () => {
//     console.log("You clicked on White button");
//     document.body.style.backgroundColor = "White";
// }
// const blueClick = () => {
//     console.log("You clicked on blue button");
//     document.body.style.backgroundColor = "blue";
// }
// const yellowClick = () => {
//     console.log("You clicked on yellow button");
//     document.body.style.backgroundColor = "Yellow";
// }

// 2-------solution

const buttons = document.querySelectorAll('.button');
// console.log(buttons)
const body = document.querySelector("body");

buttons.forEach(function (button){
    button.addEventListener('click',function(e){
        console.log(e)
        console.log(e.target)
        if(e.target.id ==='gray')
        {
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id ==='white')
        {
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id ==='blue')
        {
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id ==='yellow')
        {
            body.style.backgroundColor=e.target.id
        }
    })
})