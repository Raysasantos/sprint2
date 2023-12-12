var input = document.querySelector("input")
var botao = document.querySelector("button")
var div = document.querySelector("div")

var numeroclientes = 0;

function categorias(){
    var criap = document.createElement("p");
    numeroclientes = numeroclientes + 1;
    var texto = `Codigo ${numeroclientes} <br> Nome: ${input.value}`;
    criap.innerHTML = texto
    div.appendChild(criap)
}

botao.onclick = categorias 
 