"use strict"; // this will enable strict mode in JavaScript which will help you to write cleaner code and avoid some common mistakes. It will throw errors for some actions that are normally allowed in JavaScript.

// alert(3 + 3); // this will show a pop-up alert box with the message "6" in the browser. It is used to display information to the user. BUT WE ARE USING NODE NOT BROWSER SO THIS WILL NOT WORK HERE.


/* 
Datatypes in js are divided into two categories 
-> 1. Primitive Datatypes
-> 2. Non-Primitive Datatypes

 1. Primitive Datatypes -> These are the basic datatypes in JavaScript. They are immutable (cannot be changed) and are passed by value.

 There are 7 primitive datatypes in JavaScript -> 
 1. String -> A sequence of characters used to represent text.
 2. Number -> range of numbers in JavaScript is from -(2^53 - 1) to (2^53 - 1).
 3. BigInt -> range of numbers in JavaScript is from -(2^63 - 1) to (2^63 - 1).
 4. Boolean -> A logical datatype that can have only two values: true or false.
 5. Undefined -> A variable that has been declared but not assigned a value.
 6. Null -> A value that represents the intentional absence of any object value.
 7. Symbol -> A unique identifier used as an object property key.

 2. Non-Primitive Datatypes -> These are the complex datatypes in JavaScript. They are mutable (can be changed) and are passed by reference.
 
 There are 3 non-primitive datatypes in JavaScript -> 1. Object, 2. Array, 3. Function 
 
 */

console.log(typeof null) // The typeof operator returns "object" for null, which is a known bug in JavaScript.
console.log(typeof undefined) // The typeof operator returns "undefined" for undefined.


