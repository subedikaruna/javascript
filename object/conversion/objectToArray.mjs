let info={
    name:"karuna",
    age:25,
    isMarried:false
}

//object=>array



// let keysArray=Object.keys(info)//["name","age","isMarried"]
// console.log(keysArray)
// let valuesArray=Object.values(info)
// console.log(valuesArray)//[ 'karuna', 25, false ]
let propertyArray=Object.entries(info)
console.log(propertyArray)//[ [ 'name', 'karuna' ], [ 'age', 25 ], [ 'isMarried', false ] ]