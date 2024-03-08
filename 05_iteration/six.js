// const programming = ["js","cpp","py"];
// programming.forEach((item)=>{
//     console.log(item)
// })

const programming = ["js","cpp","py"];
 const values = programming.forEach((item)=>{
    // console.log(item)
    return item
})
// console.log(values);

//filter

const myNum = [1,2,3,4,5,6,7,8,9,10]
console.log(myNum.filter((num)=>num>4))


const myNum2 = [1,2,3,4,5,6,7,8,9,10]
const res = myNum2.filter((num1)=>num1<7)
console.log(res)