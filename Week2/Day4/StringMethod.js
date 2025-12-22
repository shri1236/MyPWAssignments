//ParseInt
let price="2500"
console.log(price , typeof(price))
let num=parseInt(price)
console.log(num , typeof(num))

//substring -  print the data based on the index
let topic="Playwrite"
let start=topic.substring(3)
console.log(start)
let end=topic.substring(3,8)
console.log(end)

//slice accept both +ve amd -ve
let cc="Javascript"
let sliceval=cc.slice(3,6)
console.log("slice value1",sliceval)
let slice2=cc.slice(-8,-2)
console.log(slice2)


