const codigo = "A-BC-123-XY-999"
console.log(codigo.slice(2,-7));
console.log(codigo.includes("9999"));
console.log(codigo.substring(2,5));

//verificar se a string contém a palavra "email"
const frase = "Aprender JavaScript com lógica é essencial!";
console.log(frase.includes("python"));

const frase2 = "Nome: João Silva | Idade: 25 | Email: joao.silva@email.com";

    //Verifique se a string contém a palavra "Email".
    if (frase2.includes("email")) {
        console.log("A string tem a palavra Email!")
    }
    //Extraia apenas o nome completo.
    console.log(frase2.slice(6,16))

    //Extraia apenas a idade (como número).
    parseInt(frase2.slice(26,28));

    //Extraia apenas o email.
    frase2.slice(38);

    //Verifique se o email contém o domínio "@email.com".
    if (frase2.includes("@email.com")) {
        console.log("O email contém o domínio @email.com")
    }
    //Saída do código de cada informação(nome,idade,email) = "nome = João Silva | idade = 25  | email = joao.silva@email.com"
    let obj = {
    name: " João Silva",
    idade: " 25 anos",
    email: " joao.silva@email.com",
}

    console.log(obj.name + obj.idade + obj.email);


