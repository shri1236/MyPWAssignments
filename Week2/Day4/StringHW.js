function reverses(value)
{
   // let value = "madam"
    let chars = value.split("")
    console.log(chars)
    let revstr = ""
let strlen = value.length
console.log(value.length)
for(let i=strlen-1;i>=0;i--){
    revstr = revstr + chars[i]
}
console.log(revstr)
return revstr
}

let value="madam"
let newRev=reverses(value)
let boolean
if (newRev==value){
    boolean = true
}
else{
    boolean = false
}
switch(boolean){
    case true:
        console.log("Its a palindrome")
        break;
    
    case false:
        console.log("Not a palindrome")
        break;
    default:
        console.log("None")
        break;
}