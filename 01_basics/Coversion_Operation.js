let score = "33abc"

// const {score} = req.body    // value from request body, no fixed type

console.log(score, typeof score) // string

let intScore = Number(score) // converting string to number
console.log(intScore,typeof intScore) // number

let stringScore = String(intScore) // converting number to string
console.log(stringScore, typeof stringScore) // string

let boolScore = Boolean(score) // converting string to boolean
console.log(boolScore, typeof boolScore) // boolean

// "33" -> 33
// "33abc" -> NaN
// true -> 1 ,false -> 0

// For boolean conversion, empty string is false and any non-empty string is true.




