const email = "";
if(email){
    console.log("Got email")
}
else{
    console.log("Dont have email");
}

//falsy values
// 0, -0, NaN, BigInt 0n, null, undefined false ""


//truthy values
// "0", [], 'false' , " ", {}, function(){}

const emptyObj = {};
if(Object.keys(emptyObj).length===0){
    console.log("empty");
}