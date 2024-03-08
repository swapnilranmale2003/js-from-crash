// const array = [1,2,3,4,5];
// for (let i = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(array[index])
// }


// for(let i=1;i<=10;i++){
//     console.log(i*2)
// }

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number")
    }
    // console.log(element)
}

// nested Loop
for (let i = 0; i <=10; i++) {
    // console.log(`Outer loop value ${i}`)

    for (let j = 0; j <=10; j++) {
        // console.log(`inner loop value ${j} outer loop ${i}`)

    }

}
const myArray = ['batman', 'thor', 'superman'];
// console.log(myArray.length)
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element)
}

//break & continue

for (let index = 1; index < 20; index++) {
    if(index==5){
        console.log("5 detected");
        break
    }
    console.log(`value of i is ${index}`)
    
}

for (let index = 1; index < 20; index++) {
    if(index==5){
        console.log("5 skipped");
        continue
    }
    console.log(`value of i is ${index}`)
    
}