//"nitan" => "Nitan"
//make function and return "Nitan"
let firstCapitalLetter=(name)=>{
    //"nitan"=>["n","i","t","a","n"]=>["N","i","t","a","n"]=>"Nitan"
    let arrayName=name.split("")//["n","i","t","a","n"]
    let outputArray=arrayName.map((value,i)=>{
        if(i===0){
            return value.toUpperCase()
        }
            else{
                return value.toLowerCase()
            }
        })
    
 
  
   let output=outputArray.join("")//Nitan
   return output
}
let _firstCapitalLetter=firstCapitalLetter("nitan")
console.log(_firstCapitalLetter)