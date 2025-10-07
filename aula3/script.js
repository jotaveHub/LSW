/*function soma(a,b) {
    let resultado = a + b;
    return resultado;
}
console.log(soma(4, 4));*/

//função expressa
/*const somar = function(a,b) {
    return a+b;
}*/

// Funções Expressal de alta ordem (callback)

/* function greeting(name) {
    alert('Hello' + name);
}

function processUperInput(callback) {
    var name = prompt('Please enter your name');
    callback(name);
}
processUperInput(greeting);
*/

/*
function ExeCallback(callback) {
    let resultado = callback(2,3)
    console.log(resultado)
}
ExeCallback(soma);*/


// arrow function
//const soma = (a,b) => a + b;

/*function imprimirUsuario(nome) {
    let resultado = `olá ${nome}`
    console.log(resultado)
}
function ExibirUsuario(dados,callback) {
    callback(dados.nome)
}

const pessoaDados = {
    nome: "Fabio",
    idade: 40
}
ExibirUsuario(pessoaDados,imprimirUsuario) */

/*
let nomeX = "Fabio"
function ExibirNome() {
    let nomeX = "alice";
    console.log(nomeX);
}

ExibirNome();
console.log(nomeX)
*/

// Funções Aninhadas 
/*
function saudacao(nome) {
    function mensagem() {
        return `Olá, ${nome}! Seja bem-vindo.`;
    }
    return mensagem();
}
console.log(saudacao("Maria"));
*/

function potenciacao(a,b=2) {
    let resultado = 1;
    if(b >= 3) {
        for(let i =0; i <b; i++) {
            resultado = resultado * a;
        }
    } else {
        resultado = a * a;
    }
    return resultado;
}

console.log(potenciacao(2));
console.log(potenciacao(2,4));



