let value = process.argv[2];
let num1 = process.argv[3];
let num2 = process.argv[4];
num1 = parseInt(num1)
num2 = parseInt(num2)

if(value === 'add'){
    console.log("The sum is", num1+num2);
}
if(value === 'subtract'){
    console.log("The subtract is", num1-num2);
}
if(value === 'multiply'){
    console.log("The multiply is", num1*num2);
}
if(value === 'divide'){
    console.log("The divide is", num1/num2);
}
if(value === 'sin'){
    console.log("Sin value of ",num1,"is", Math.sin(num1));
}
if(value === 'cos'){
    console.log("Cos value of ",num1,"is", Math.cos(num1));
}
if(value === 'tan'){
    console.log("Tan value of ",num1,"is", Math.tan(num1));
}


const crypto = require("crypto");

function randomNumbers(character, length){

    let string = '';

    for(let i=0;i<length;i++){

        let randomPosition = crypto.randomInt(0, character.length);
        let randomChar = character[randomPosition];

string+= randomChar;
    }
    return string;
}

if(value === 'random'){

console.log("This is random numbers", randomNumbers('1234534545326767', num1));

}