// make a arrow function named canEnter, pass a value , the function must return true if the given age either 18 or 25 or 30 else return false
let canEnter=(value)=>{
  if(value===18||value===25||value===30){
  return true
}
else{
    return false
}
}
let _canEnter=canEnter(25)
console.log(_canEnter)

