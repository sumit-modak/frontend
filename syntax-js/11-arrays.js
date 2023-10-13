let marks_class_12 = [91, false, "Not Present"]
console.log(marks_class_12[0])
console.log(marks_class_12[1])
console.log(marks_class_12[2])
console.log(marks_class_12[3]) // Will be undefined because index 6 does not exist
marks_class_12[3] = 89 // Adding a new value to the array
marks_class_12[0] = 96 // Changing the value of an array
console.log(marks_class_12)
console.log("The length of marks_class_12 is", marks_class_12.length)
console.log(typeof marks_class_12)

// Array Methods
let b = marks_class_12.toString() // b is now a string 
console.log(b, typeof b)
let c = marks_class_12.join(" and ") // adds the given parameter between every array elements 
console.log(c, typeof c)

// Array manipulation
let numArr = [1, 2, 3, 34, 4]
let r1 = numArr.pop() // pop returns the popped element
console.log(numArr, r1)
let r2 = numArr.push(56) // push returns the new array length
console.log(numArr, r2)
let r3 = numArr.shift() // Removes an element from the start of the array
console.log(r3, numArr) 
let r4 = numArr.unshift(78) // Adds an element from the start of the array
console.log(r4, numArr)

// deleting ith element in a array
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
delete num[0] // doesnt change the length of the array

// concatinating two or more than two arrays
let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19]
let num_even_more = [211, 212, 213, 214, 415, 416, 417, 418, 419]
let newArray = num.concat(num_more, num_even_more)
console.log(newArray)

// sort method
let compare = (a, b)=>{
  return b - a
}
// sorting the array
newArray.sort(compare)
console.log(newArray)
// reversing the array
newArray.reverse()
console.log(newArray)

// Splice
let num2 = [551, 22, 3, 14, 5, 6, 7, 8, 229]
console.log(num2)
let delVals = num2.splice(2, 4, 1021, 1022, 1023, 1024, 1025)
console.log(delVals)

// Slice
let newNum1 = num2.slice(3)
console.log(newNum1)
let newNum2 = num2.slice(3, 5)
console.log(newNum2)
