{
    //parent
    let a=1
   console.log(a)//10
{

    //child
    a=12
    console.log(a)//12
   
}
console.log(a)//12
}
/* 
parent
a=12
 
child 
 when variable is not defined in child block and it cannot change in its own block then it will change parents block variable
*/