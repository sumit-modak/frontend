let name = "sumit"
console.log(name.length)
console.log(name[0])
console.log(name[1])
// name[3] = "n" // this will not work because strings are immutable

// Template literals
let boy1 = 'Pramod'
let boy2 = 'Nikhil'
// Nikhil is a friend of Pramod
let sentence = `${boy2} is a friend of ${boy1}`
console.log(sentence)

// Escape Sequence Characters
let fruit = "Bana\"na"
console.log(fruit)

// String methods
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.slice(2, 4))
console.log(name.slice(2))
console.log(name.replace("sum", "Per"))

// trimming strings
let friend2 = "      Meena        "
console.log(friend2.trim())

// concatinating strings
let friend = "Naman"
console.log(name.concat(" is a friend of ", friend, " Ok"))

let fr = "Raman" + "Shivika" + "Harry"
console.log(fr)

