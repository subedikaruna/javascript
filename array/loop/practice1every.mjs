//check whether we have all number in the list[2,4,9,6]
let ar1=[2,4,9,6]
let ar2=ar1.every((value,i)=>{
    if(value%2===0){
        return true
    }
    else{
        return false
    }
})
console.log(ar2)