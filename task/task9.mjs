//"nitan" => "Nitan"
//make function and return "Nitan"

let firstCapitalLetter=(name)=>{
        //"nitan"=>["n","i","t","a","n"]=>["N","i","t","a","n"]=>"Nitan"
    let arrayName=name.split("")//["n","i","t","a","n"]
    arrayName[0]=arrayName[0].toUpperCase()
  
   let output=arrayName.join("")//Nitan
   return output;
}
let _firstCapitalLetter=firstCapitalLetter("hari")
console.log(_firstCapitalLetter)