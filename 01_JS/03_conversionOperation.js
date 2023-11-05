
// let score=33;
// let score="33"
// let score="33abc"
// let score=undefined;
// console.log(typeof score);

let score=null;
let valueInNumber=Number(score);

console.log(typeof valueInNumber);
console.log(valueInNumber);

//After Conversion to Number

//"33"=>33----Type:number
//"33ab"=>NaN----Type:number
//undefined=>NaN----Type:number
//true=>1;false=>0----Type:number
//null=>0----Type:number

// let isLoggedIn=1;
// let isLoggedIn="";
let isLoggedIn="Sunny";


let booleanIsLoggedIn=Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

//conversion to Boolean
//1=>true;0=>false
//""=>false
//"Sunny"=>ture

let number=33;
let numberString=String(number);
// console.log(numberString);
// console.log(typeof numberString);