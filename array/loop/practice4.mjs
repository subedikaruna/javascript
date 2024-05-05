//check whether we have role list as " superAdmin" in the list "admin customer"
let v="admin customer"
let v1=v.split(" ")
let v2=v1.some((value,i)=>{
    if(value==="superAdmin"){
        return true

    }
    else {
        return false
    }
})
console.log(v2)
