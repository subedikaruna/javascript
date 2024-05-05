//primitive=>number,string,boolean,undefined, null

//memory allocation
//if let is used memory is allocated for that
let a=1
let b=a
let c=1
//in case of primitive ===sees value
console.log(a===b)//true
console.log(a===c)//true
// a=10
// console.log(a)//10
// console.log(b)//1
// console.log(c)//1


//non-primitive =>array,object,data,error
//memory allocation
//befor allocating memory it check whethr the variable is copy of another variable
//if the variable is copy of another,it will share memory
let ar1=[1,2,3]
let ar2=ar1//here ar2 shared memory with ar1
let ar3=[1,2,3]//but ar3 doesnot

//incase of non-primitive ====see memory location/address
console.log(ar1===ar2)//true
console.log(ar1===ar3)//false




// ar1.push(5)
// console.log(ar1)//[1,2,3,5]
// console.log(ar2)//[1,2,3,5]
// console.log(ar3)//[1,2,3]