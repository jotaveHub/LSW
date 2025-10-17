let obj = {
    name: "fulano",
    age: 32,
    preferencesFoods: ["lasanha", "feijoada", "frutas"],
    friends: [{name: "matheus"},{name: "João paulo"},{name: "samily"}],
    saudacao: () => {
        console.log("oi meus amigos");
    },
};
//Manipulando Objetos.
console.log(obj.friends[0]);

 //Transfomar objeto em JSON.
const objJson = JSON.stringify(obj);
const obj2 = JSON.parse(objJson)
console.log(obj2)


