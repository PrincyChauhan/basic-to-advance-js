/*
Primitive data types in JavaScript include:

Primitive data types are immutable(non-modifiable) data types. Once a primitive data type is created we cannot modify it.

Numbers - Integers, floats
Strings - Any data under single quote, double quote or backtick quote
Booleans - true or false value
Null - empty value or no value
Undefined - a declared variable without a value
Symbol - A unique value that can be generated by Symbol constructor

*/


let word = 'JavaScript'
console.log(word);
// ================================//

let numOne = 3
let numTwo = 3
console.log(numOne == numTwo);      // true
// ================================//

let js = 'JavaScript'
let py = 'Python'
console.log(js == py);            //false 
// ================================//

let lightOn = true
let lightOff = false
console.log(lightOn == lightOff); // false