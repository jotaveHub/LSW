// Date -> mostra informações de data/horario.
const agora = new Date();
console.log(agora);

// criando data 
const dataespecífica = new date(2025,3,19,15,30,0,0);

//obtendo ano,mês,dia,hora,minutos,segundos.
const ano = agora.getFullYear();
console.log(ano);
const mes = agora.getMonth();
console.log(mes);
const dia = agora.getDay();
console.log(dia);
// dia2 -> nome dia da semana ex: Quinta.
const dia2 = agora.getDate();
console.log(dia2);
const hora = agora.getHours();
console.log(hora);
const minuto = agora.getMinutes();
console.log(minuto);
const segundo = agora.getSeconds();
console.log(segundo);

//Convertendo para String.
const DataAoVivo = new Date();
//Formato padrão do 'toString()'
console.log(DataAoVivo.toString());

//Formato Local
console.log(DataAoVivo.toLocaleDateString());
console.log(DataAoVivo.getTime());
console.log(DataAoVivo.toLocaleString());

//Usando Locales

console.log(DataAoVivo.toLocaleString("pt-BR"));
console.log(DataAoVivo.toLocaleString("en-US"));

const dataNascimento= new Date("2007","02","14");

const calcularIdade = (dataNascimento) => {
    const hoje = new Date();
    let idade = hoje.getFullYear() - dataNascimento.getFullYear();
console.log(dataNascimento);
}



