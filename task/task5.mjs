//array of object
let product=[
    {
      name:"laptop",
      price:100000
},

{
    name:"mobile",
    price:40000
},
{
    name:"tv",
    price:66666
}


]
// let arrayOfName=product.map((value,i)=>{
//     return value.name
// })
// let output=product.filter((value,i)=>{
//     if(value.price>60000)
//     {
//         return true
//     }

    
// })
   let output1=product.filter((value, i) => {
    if (value.price > 60000) {
      return true;
    }
  })
  .map((value, i) => {
    return value.name;
  });
 console.log(output1)
// console.log(arrayOfName)
// console.log(output)


//["laptop","mobile","tv"]
//[100000,40000,55555]
//[{ name:"laptop",price:100000},{name:"tv",price:55555}=>product whose price is more than 60000
  ////["laptop","tv"]
