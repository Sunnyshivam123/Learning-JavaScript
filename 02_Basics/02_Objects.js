
let mySymb=Symbol();

let JsUser={
    name:"Sunny",
    [mySymb]:"good morning",
    "full Name":"Sunny Shivam",
    age:24,
    email:"sunnykumarshivam143@gmail.com",
    phone:"7739449847"
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full Name"]); 

// console.log(JsUser[mySymb]);

// console.log(typeof JsUser[mySymb]);

JsUser.email="abc@google.com";
// Object.freeze(JsUser);
JsUser.email="abc@microsoft.com";

// console.log(JsUser)

JsUser.greeting=function(){
    console.log(`Hello JsUser ${this.name}`);
}
// console.log(JsUser.greeting);
console.log(JsUser.greeting());

let obj1={1:"a",2:"b",3:"c"}
let obj2={4:"a",5:"b",6:"c"}

let obj3={obj1,obj2}
// console.log(obj3);

// console.log(Object.keys(obj1));
// console.log(Object.values(obj1));
// console.log(Object.entries(obj1));
console.log(Object.hasOwnProperty('1'));
