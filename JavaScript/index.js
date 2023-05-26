let cartao; //não interessa o tipo, tudo que o usário digitar vem para esta tela

alert("Colocar o script la no final perto do body quando ele puxa externo");

cartao = prompt("Informe seu cartão de crédito", "Digite");
confirm("Concorda em atualizar?");
document.write("Cartão clonado: "+cartao); //pega o que foi salvo na variavel


//tem que salvar essa variavel em algum lugar
let minha_div = document.querySelector(".container"); //pegando a div com a classe container la no html

minha_div.innerHTML = "<p> Dentro da div </p>";
minha_div.innerHTML = "<img src=\"download.jpg\" width\'50px\' height=\'50px\'>";