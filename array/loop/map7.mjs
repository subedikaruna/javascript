///[1,3,4,5]=[100,300,0,500]
let input=[1,3,4,5]
let output=input.map((value,i)=>{
    if (value%2===0){
        return value*0;

}
else{
    return value*100;
}
})
console.log(output)