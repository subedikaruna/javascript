// 		b)	if age is 25,  console your ticket is free
// if age is 26,  console your ticket cost 100
// if age is 27,  console your ticket cost 200
// if age is other than 25,26,27 console you are not allowed
// c)      if age [from 1 to 17],  console your ticket is free
// if age[18 to 25 ],  your ticket cost 100
// else,  your ticket cost 200





let age=20
if(age>=0 && age<=18){
    console.log("underage")
}
else if(age>=19 && age<=60){
    console.log("adult")
}
else if(age>=61 && age<=150){
    console.log("old")
}
else{
  
        console.log("none")
    }
