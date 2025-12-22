let value="this is a test and this test is simple"
let search="test"
let word=value.split(" ")
console.log(word)
let count=0

for(let i=0;i<word.length;i++)
{
   if(word[i]=== search)
   {
    count++
   }
}
console.log("The word ", search, " Repeated ", count , "times")

