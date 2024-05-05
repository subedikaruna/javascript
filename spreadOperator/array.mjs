let ar1=["a","b","c"]
let ar2=[1,2,3]
//["a","b","c",1,2,3]
//spread operator are the wrapper opener i.e.spread operator is denoted by ...
let ar=[3,4,...ar1,10,...ar2]
console.log(ar)
//[,1,2,3,"a","b","c"]
let ar_=[...ar2,...ar1]
console.log(ar_)