//singletone ------> Object.create

//object literals-----> key & value pair
const mySym = Symbol("Key1");

const jsUser = {
    name:"John",
    [mySym]:"myKey1",
    "full name" :"Briendan eich",
    sirname :"Dahl",
    email:"example@gmail.com",
    age: 21
}
// console.log(jsUser["full name"])
// console.log(jsUser["email"])

console.log(typeof jsUser[mySym])