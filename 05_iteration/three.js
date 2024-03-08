// const arr = [1,2,3,5,6];
// for (const num of arr) {
//     console.log(num)
// }

const greeting = "Hello World";

for (const greet of greeting){
    if(greet==" "){
    continue;
    }
    // console.log(`Each char is ${greet}`)

}

//Maps -->use to identify unique value

const map = new Map();

map.set("IN","INDIA");
map.set("USA","UNITED STATES OF AMERICA");
map.set("FR","FRANCE");
// map.set("IN","INDIA"); //will not added in map
// console.log(map)


for (const [key, value] of map) {
    console.log(key, ':-', value)
}