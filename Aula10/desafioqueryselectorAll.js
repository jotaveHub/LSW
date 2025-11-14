const Listafrutas = document.querySelectorAll("#minhaLista li");
const ListafrutasArray= Array.from(Listafrutas);

const OrdenarBTn = document.querySelector("#OrdenarBtn");

OrdenarBTn.addEventListener("click",OrdenarLista);
function OrdenarLista() {
    const ListaOrdenada = ListafrutasArray.sort((a,b)=>{
        return a.textContent.localeCompare(b.textContent)
    });
    return ListaOrdenada;
}

const ul = document.querySelector("#minhaLista");
