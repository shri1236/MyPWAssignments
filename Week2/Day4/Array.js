//Array

let value=[23,"Java",false,,null]
console.log("Length of array",value.length)
console.log("Index",value[2])

let empName=["Ravi","Dinesh",,true]
console.log("Length of an array",empName.length)
console.log("Index value of emp",empName[1])

//push
value.push("Hello")
console.log(value)
value.push(11)
console.log(value)

//pop
value.pop()
console.log(value)

//replace value
value[3]=78
console.log(value)

//unshift and shift
value.unshift("arrays")
console.log(value)

value.shift()
console.log(value)