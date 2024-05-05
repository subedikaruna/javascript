// //"my name is nitan" => "My Name Is Nitan"
// //make function and return "My Name Is Nitan"
// let firstCapitalLetter=(name)=>{
   
//     let arrayName=name.split(" ")
//     let outputArray=arrayName.map((value,i)=>{
//         if(i===0){
//             return value.toUpperCase()
//         }
//             else{
//                 return value.toLowerCase()
//             }
//         })
    
 
//   let eachWordCapital=(input)=>{
//     let inputArray=input.split(" ")
//   }
//    let outputArray1=inputArray.map((value,i)=>{
//     return firstCapitalLetter(value)

//    })
//    let output=outputArray1.join(" ")
//    return output
// }
// let _eachWordCapital=eachWordCapital("my name is karuna")
// console.log(_eachWordCapital)

// task is to convert such sentence "my name is sakar." to "My Name Is Sakar."
let firstLetterCapital = (name)=>{ // this code copied from previous task.mjs
    let arrayName = name.split("")
    arrayName[0] = arrayName[0].toUpperCase()
    let output = arrayName.join("")
    return output
}
let capitalSentence = (value,i)=>{
    let step1= value.split(" ")
    let step2 = step1.map((value,i)=>{
        return firstLetterCapital(value) // this function from code above.
    })
    let final = step2.join(" ")
    return final
}
console.log(capitalSentence("my name is karuna"))