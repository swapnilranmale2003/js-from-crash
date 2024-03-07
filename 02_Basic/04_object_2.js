const tinderUser = {};
tinderUser.id = 1;
tinderUser.name = "Smith";
tinderUser.isLoggedIn = !false; 
// console.log(tinderUser)

const employee = {
    email : "employee@gmail.com",
    fullname:{
        employeeName:{
            firstName : "Sunny",
            lastName :"Ranmale"
        }
    }
}
// console.log(employee.fullname.employeeName)
// console.log(employee.fullname1 ?.employeeName, "")


const obj1 = {
    1:"a",
    2:"b"
}

const obj2 = {
    3:"a",
    4:"b"
}

// const obj3 = {...obj1, ...obj2}
// console.log(obj3)


// const obj4 = Object.assign({},obj1,obj2);  //{} are optional
// console.log(obj4)
// console.log(obj1)

const users =[
    {
        id:1,
        name:"Anthany"
    },
    {
        id:2,
        name:"Amar"
    },
    {
        id:3,
        name:"Akabar"
    },
    {
        id:4,
        name:"Soppy"
    }
]
console.log(users[1])

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))