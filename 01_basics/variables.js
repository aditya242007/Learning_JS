const accountId = 12345                         
let accountEmail = "aditya12@gmail.com"
var accountPass = "123"
accountCity = "Indore"

// printing one value at a time using -> console.log() method
console.log(accountId)         
console.log(accountEmail)
console.log(accountPass)
console.log(accountCity)

// accountId = 123456 // this will throw an error because const variable cannot be reassigned

// Both 'let' and 'var' variables can be reassigned in JavaScript.
accountEmail = "kalure123@gmail.com"
accountPass = "1234"
accountCity= "Bhopal"

 // printing all variable at same time using -> console.table() method
console.table([accountEmail, accountPass, accountCity])  

let accountState 
console.table([accountEmail, accountPass, accountCity, accountState]) // undefined will be printed for accountState because it is declared but not initialized


// Dont use var keyword to declare a variable because it is function scoped and can be redeclared and updated. It can lead to unexpected behavior in your code. Use let or const instead for block-scoped variables.


