let number = 10;
let text = "Olá,Mundo!";
let logico = true;

if(number > 5) {
    console.log('O número é maior que 5');
}
else {
    console.log('O número é menor ou igual a 5');
}

for (let contador =1;contador <= 5;contador++) {
    console.log("contador:" + contador)
}
while(number > 0) {
    console.log("Número atual: " + number)
    number = number - 1;
}

function somar(a, b) {
    return a + b;
}

let resultado = somar(3,7)
console.log("Resultado da soma:" + resultado)


