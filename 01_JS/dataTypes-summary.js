//Primitive-->Number,String,BigInt,Boolean,null,undefined,Symbol
//Non-Primitive-->Array, Objects, Functions

let id=Symbol('123');
let anotherId=Symbol('123');

console.log(id==anotherId);//false


//Array

let myHeros=["shaktimaan","Batman","superman"];

//Objects
 
let myObj={
    name:"Sunny",
    age:24
}

//+++++++++++++++++++++++Memory++++++++++++++++++++++++++
//Stack(Primitive), Heap(Non-Primitive)

