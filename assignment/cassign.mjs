let enterRoom=(number)=>{
if (number<18){
    return "you can enter room"
}
else{
    return "you cannot enter"
}
}
let _enterRoom=enterRoom(12)
console.log(_enterRoom)