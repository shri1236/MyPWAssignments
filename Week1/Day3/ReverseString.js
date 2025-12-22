let str="madam"
let reverse=""
let ch=str.split("")
console.log(ch)
for(let i=str.length-1;i>=0;i--)
{
  reverse=reverse+ch[i]
}
console.log(reverse)