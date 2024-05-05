// g) make a arrow function that takes a input as number  that perform
// if age [upto 17],  retrun your ticket is free
// if age[18 to 25 ], return  your ticket cost 100
// if age[>26],  return your ticket cost 200
// if age===26 return your ticket is 150

let age=(num)=>{
    if(num<=17){
    return "your ticket is free"

}
else if(num>=18 && num<=25){
return "your ticket cost is 100"

}
else if(num>26){
return "your ticket cost is 200"

}
else if(num===26){
    return "your ticket cost is 150"
    
    }
}
let _age=age(22)
console.log(_age)