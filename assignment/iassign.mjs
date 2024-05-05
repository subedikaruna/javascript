//make a function that takes input as number and return outupt You can watch movies if input is greater or equal to 18 else return "You are not authorized to watch movie"
let age=(num)=>{
    if(num<=18){
    return "your ticket is free"

}
else if(num>=18){

    return "You are  authorized to watch movie"
}

else {
    return "You are not authorized to watch movie"
}

}
let _age=age(22)
console.log(_age)