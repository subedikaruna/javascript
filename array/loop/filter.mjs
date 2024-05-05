//number greater than 12

let ar1=[1,10,20,15,9,7]

let ar2=ar1.filter((value,i)=>{
    if (value>12){
    return true
    }
    else{
        return false
    }
})
console.log(ar2)