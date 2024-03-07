console.log("Array Basics part two");

const marvel_heros = ['thor', 'ironman', 'spiderman'];
// console.log("Marvel Heros",marvel_heros);

const dc_heros = ['superman', 'flash', 'batman'];
// console.log("dc Heros",dc_heros);

// marvel_heros.push(dc_heros);
// console.log(marvel_heros)

// const common = marvel_heros.concat(dc_heros) //using concat
// console.log(common)

// const all_new_heros =[...marvel_heros, ...dc_heros];  //join usig speread oper
// console.log(all_new_heros);


const anotherArray = [1,2,4,[4,5],6, [7,8,[9]]];
// console.log(anotherArray)
const realArray = anotherArray.flat(Infinity);
// console.log(realArray)




// console.log(Array.isArray("Swapnil"))
// console.log(Array.from("Swapnil"))
console.log(Array.from({name:"Sunny"}))

const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1,score2,score3))