const pessoa = {
    nome: "Ana",
    idade: 20,
};

let obj = {};

obj.name = "fabio";
const listNameProps = Object.keys(obj);
// `prop` representa as chaves do objeto `obj` retornadas por `Object.keys(obj)`
listNameProps.forEach((prop) => {
    console.log(obj[prop]); // Acessa o valor correspondente à chave `prop`
});

// `props` representa as propriedades do objeto `pessoa`
for (const props in pessoa) {
    console.log(pessoa[props]); // Acessa o valor correspondente à propriedade `props`
}

let frase = "ADS é nota 5 no enade"
const indice = frase.indexOf(5,3)
const existe = frase.includes("Enade")
