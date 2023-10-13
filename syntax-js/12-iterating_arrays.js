let num = [3, 5, 1, 2, 4]

for(let i=0; i<num.length;i++){
  console.log(num[i])
}

// ForEach Loop
num.forEach((element) => {
  console.log(element * element)
})

// Array.from 
let name = "Harry"
let arr = Array.from(name)
console.log(arr)

// for...of 
for (let item of num){
  console.log(item)
}

// for...in
for (let i in num){
  console.log(num[i])
}


// Array map method
let ar = [45, 23, 21]
let a = ar.map((value, index, array) => {
  // console.log(value, index, array)
  return value + index
})
console.log(ar)


// Array filter method
let ar2 = [45, 23, 21, 0, 3, 5]
let a2 = ar2.filter((a) => {
  return a < 10
})
console.log(a2, ar2)


// Array reduce method
let ar3 = [1, 2, 3, 5, 2, 1]
let a3 = ar3.reduce((h1, h2) => {
  return h1 + h2
})
console.log(a3, ar3)
