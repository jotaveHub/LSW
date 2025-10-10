function validaEntradas(){
    const min = parseInt(document.getElementById("min").value);
      const max = parseInt(document.getElementById("max").value);
    
      if (isNaN(min) || isNaN(max)) {
        alert("preeencha min ou max com número válidos");
        return null;
      }
    
      if (min > max) {
        alert("eroor: o minimo esta sendo maior que o máximo. digite corretamente");
        return null;
      }
      return { min,max };
    }

function gerarNumeroAleatorio() {
    const min = parseInt(document.getElementById("min").value);
    const max = parseInt(document.getElementById("max").value);
    if(isNaN(min) || isNaN(max)) {
        alert("preencha min ou max com números válidos");
        return null;
    }
if(min>max) {
    alert("error: o min é menor que o máximo");
    return null;
}
let resultado = Math.floor(Math.random() * (max - min + 1)) + min;
document.getElementById("resultado").textContent = resultado;
return resultado;
}
