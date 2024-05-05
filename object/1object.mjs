//array is collection of value
//whereas object is collection of key value pair here name is key and "karuna"is value and same
//key value pair are called property here     name:"karuna", is property
let info={
    name:"karuna",
    age:25,
    isMarried:false
}
//get value
console.log(info)
console.log(info.name)
console.log(info.age)
console.log(info.isMarried)
//change value
info.age=24
console.log(info)

//delete isMarried field
delete info.isMarried
console.log(info)



