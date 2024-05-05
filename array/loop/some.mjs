//array has at least one element greater than 18
let ar1=[1,18,20,30]

let v=ar1.some((value,i)=>{
    if (value>18){
        return true
        }
        else{
            return false
        }
})
console.log(v)