//check whether we have nitan in the list["utsab","karuna","prajjwal","nitan"]
let ar1=["utsab","karuna","prajjwal","nitan"]
let ar2=ar1.some((value,i)=>{
    if(value==="nitan"){
        return true

    }
    else {
        return false
    }
})
console.log(ar2)