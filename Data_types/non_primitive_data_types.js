/*
Non-primitive data types in JavaScript includes:
1.Objects
2.Arrays
*/

// ==================================================================//

/*
Non-primitive data types are modifiable or mutable.
We can modify the value of non-primitive data types after it gets created.
*/


// ==================================================================//

/*
Let us see by creating an array.
Arrays can contain the same or different data types.
Array values are referenced by their index.
In JavaScript array index starts at zero. I.e., 
the first element of an array is found at index zero, the second element at index one, and the third element at index two, etc.
*/ 

let num= [1,2,3]
num[0]=4
console.log(num);



/* an array, which is a non-primitive data type is mutable. 
Non-primitive data types cannot be compared by value.
Even if two non-primitive data types have the same properties and values,
they are not strictly equal.*/

let nums = [1, 2, 3]
let numbers = [1, 2, 3]

console.log(nums == numbers);


/*
we do not compare non-primitive data types. Do not compare arrays, functions, or objects.
Non-primitive values are referred to as reference types, because they are being compared by reference instead of value.
Two objects are only strictly equal if they refer to the same underlying object.
*/ 


let userOne = {
    name:'Princy',
    role:'Student',
    country:'India'
    }
    
    let userTwo = userOne
    
    console.log(userOne == userTwo);  // true