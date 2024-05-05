//make a arrow function that takes one input as number and return "category1" for number range from 1 to10,  return "category2" for number range from 11 to 20, return "category3" for number range form 21 to 30
let categories=(num)=>{
    if(num>=1 && num<=10){
    return "category 1"

}
else if(num>=11 && num<=20){
return "category 2"

}
else if(num>=21 && num<=30){
return "category 3"

}
}
let _categories=categories(22)
console.log(_categories)