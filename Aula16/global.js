let div_destino;
let input_origem;

div_destino = document.querySelector("body>div:nth-child(1)");
input_origem = document.querySelector("#texto_botao>input");

function colocar_texto() {
    let novo_paragrafo = document.createElement("p");
    div_destino.appendChild(novo_paragrafo);

    novo_paragrafo.style.color="green";
    novo_paragrafo.innerHTML = input_origem.value;

}


function limpar_textos() {
    let lista_de_paragrafos = document.querySelectorAll("body>div:nth-child(1)>p");


    for(let i=0; i < lista_de_paragrafos.length; ++i) {
        //lista_de_paragrafos[i].remove();

        //div_destino.removeChild(lista_de_paragrafos[i]);

        lista_de_paragrafos[i].parentNode.removeChild(lista_de_paragrafos[i])
    }
}
