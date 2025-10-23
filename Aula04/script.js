//let x = new Array();

/*const frutas = ["maça","laranja","banana"];
const primeiro = frutas[0];

console.log(primeiro);*/

//let matriz = [[1,2,3],[1,2,3],[1,2,3]];

let array = ["joao","maria","jose","rosa","tico"];
array.push("ana");
array.unshift("carlos");

array.pop();
array.forEach(nome => console.log(nome));

const nomesMaiusculos = array.map(nome => nome.toUpperCase());
console.log(nomesMaiusculos);