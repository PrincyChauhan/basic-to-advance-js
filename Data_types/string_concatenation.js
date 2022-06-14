// Declaring different variables of different data types
let data = ' '
let fName = 'Princy'
let lName = 'Chauhan'
let cName = 'India` '
let year='22'
let state = 'Gujarat'
let subject = 'JavaScript'
let role = 'teacher'

// Concatenating using addition operator
let fullName = fName + data + lName // concatenation, merging two string together.
console.log(fullName);

let personInfoOne = fullName + '. I am ' + year + '. I live in ' + cName // ES5
console.log(personInfoOne);

// // Concatenation: Template Literals(Template Strings)
let personInfoTwo = `I am ${fullName}. I am ${year}. I live in ${cName}.` //ES6 - String interpolation method]
console.log(personInfoTwo);

let personInfoThree = `I am ${fullName}. I live in ${state}, ${cName}. I am a ${role}. I teach ${subject}.`
console.log(personInfoThree)