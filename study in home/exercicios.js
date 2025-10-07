// Calcular média de 3 números

function media (a,b,c) {
    return (a + b + c) / 3;
}

let a = 7;
let b = 3;
let c = 8;

console.log("A média dos 3 números é: " + media(a, b, c));

// Calcular antecessor e sucessor de um número

function Antecessor (num) {
    return (num -1); 
}
function Sucessor (num) {
    return (num+1);
}

let num = 3;

console.log("O antecessor do número " + num + " é: " + Antecessor(num));
console.log("O sucessor do número " + num + " é: " + Antecessor(num));