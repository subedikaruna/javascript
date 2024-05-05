// ["1","2","3"]=["1000","2111","3222"]


let input=["1","2","3"]
let output=input.map((value,index)=>{
    return `${value}${index}${index}${index}a`

})
console.log(output)