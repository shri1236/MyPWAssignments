//classRoom:
//1. data ["chrome",true,132.8]
//add index 5 -> webkit
//pop->
//use push -> firefox
//use shift ->
//use for..of to print value
let data=["chrome",true,132.8]
console.log(data)
data[5]="webkit"
console.log("Added value in the pos 5: " ,data)
data.pop()
console.log("After Pop : ",data)
data.push("firefox")
console.log("Push the value" , data)
data.shift()
console.log("After Shift", data)
//for...of 
for(num of data)
{
   console.log(num)
}