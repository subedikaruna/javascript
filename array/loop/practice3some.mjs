//check whether we have role list as admin in the list["admin","superAdmin","customer"]
let ar1=["admin","superAdmin","customer"]
let ar2=ar1.some((value,i)=>{
    if(value==="admin"){
        return true

    }
    else {
        return false
    }
})
console.log(ar2)