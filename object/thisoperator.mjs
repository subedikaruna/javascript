let info={
    name:"karuna",
   surname:"subedi",
   fullName:function(){
        console.log(this.name)
        console.log(this.surname)
   }
//    fullName:()=>{
//     console.log(this.name)
//     console.log(this.surname)
//    }


}
/*
what us this operator=>this is operator which points itself
difference between arrow and normal function
syntax,this operator doesnot support in arrow function
*/
console.log(info.name)//karuna
info.fullName()
