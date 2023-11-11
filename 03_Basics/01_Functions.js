// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }
// addTwoNumbers(3,4);
// let answer=addTwoNumbers(3,4);
// console.log(answer);

function addTwoNumbers(number1,number2){
    // let result=number1+number2;
    // return result;
    return number1+number2;
}
let answer=addTwoNumbers(3,4);
    // console.log(answer);

function userLoggedIn(userName){
    return `${userName} is logged in`;
}
// console.log(userLoggedIn("Sunny"))
console.log(userLoggedIn(""))// is logged in
console.log(userLoggedIn())// undefined is logged in

//Rest Operator
function addToCart(...num1){
    return num1;
}
// console.log(addToCart(2,3,4,5));



let user={
    name:"Sunny Kumar",
    age:24
}


function displayMessage(anyObject){
    return `My Name is ${anyObject.name}`
}
// console.log(displayMessage(user));
console.log(displayMessage({name:"ram", salary:120000}));




let myNewArray=[100,200,300,400];

function getSecondElement(getArray){
    return getArray[1];
}

// console.log(getSecondElement(myNewArray));
console.log(getSecondElement([200,300,500,700,800]));
