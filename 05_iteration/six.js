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
// console.log(myNum.filter((num)=>num>4))


// const myNum2 = [1,2,3,4,5,6,7,8,9,10]
// const res = myNum2.filter((num1)=>num1<7)
// console.log(res)

const myNum2 = [1,2,3,4,5,6,7,8,9,10]
const res = myNum2.filter((num1)=>{
    return num1<7
})
// console.log(res)

const books = [
    {
        title:"C",
        genre:"Programming",
        publish:1972
    },
    {
        title:"Cpp",
        genre:"Programming",
        publish:2006
    },
    {
        title:"JS",
        genre:"Scripting",
        publish:2009
    },
    {
        title:"php",
        genre:"Scripting",
        publish:2007
    },
    
]

// console.log(books)

let userBooks = books.filter((bk)=>{
    return bk.genre==='Programming';
})
// console.log(userBooks)

userBooks = books.filter((bk)=>{
    return bk.publish>2000&&bk.genre =='Scripting'
})
console.log(userBooks)