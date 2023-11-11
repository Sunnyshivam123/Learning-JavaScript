
if (true) {
let a=5;
const b=9;
var c=7;
}
// console.log(a);//ReferenceError--a is not defined
// console.log(b);//ReferenceError--a is not defined
console.log(c);//7

//ARROW FUNCTION

let printName=()=>{console.log("Sunny Kumar Sivam")};
printName();


// let calculateSum=(num1,num2)=>{
//     return num1+num2;
// }
// console.log(calculateSum(2,3));


// let calculateSum=(num1,num2)=> num1+num2;
// console.log(calculateSum(2,3));

let calculateMult=(num1,num2)=>(num1*num2);
console.log(calculateMult(2,4));

let printProffesion=()=>console.log("My Profession is Software Engineer");
printProffesion();

//Returning an object through Arrow Function
let objectReturn=()=>({name:"summy",age:24});
console.log(objectReturn())