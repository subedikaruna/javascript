let date=new Date()//it gives current date and time
console.log(date)
console.log(new Date().toLocaleString())
console.log(new Date().toLocaleDateString())
console.log(new Date().toLocaleTimeString())

//new Date()gives date in iso format
//yyyy-mm-ddThh:mm:ss
//2018-2-2T10:12:33 =>invalid
//2018-02-02T10:12:33 =>valid