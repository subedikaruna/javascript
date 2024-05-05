//"my name is " =>"myn namen isn"
let input = "my name is";

let input1 = input.split(" ");

let input2 = input1.map((value, i) => {
  return `${value}n`;
});

let output = input2.join(" ");
console.log(output);
