let array1=[1,2,3,true,"Sunny"];
console.log(array1[4]);

let array2=new Array(1,2,3,4);
// console.log(array2);

array2.push(5);
array2.push(6);
// console.log(array2);
array2.pop();
// console.log(array2);
array2.unshift(-1);     
// console.log(array2);
array2.shift();
// console.log(array2);

// console.log(array2.includes(9));
// console.log(array2.indexOf(9));

// let newArray=array2.join()
// console.log(newArray);

// console.log(typeof newArray);


//Slice vs Splice
let myArray=[0,1,2,3,4,5];
console.log(myArray.slice(1,3))
console.log(myArray);

myArray.splice(1,3);
console.log(myArray);