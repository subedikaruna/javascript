let hasApple=(fruits)=>{
  let _hasApple=fruits.includes("apple")

  if(_hasApple){
    return "the fruits contain apple"
  }
  else{
    return "the fruits doesnot contain apple"
  }
}
let $hasApple=hasApple(["mango","banana","apple"])
console.log($hasApple)

