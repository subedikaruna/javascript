//filter positive number


let ar1=[1,10,20,15,9,7]

let ar2=ar1.filter((value,i)=>{
    if (value>0){
    return true
    }
    else{
        return false
    }
})