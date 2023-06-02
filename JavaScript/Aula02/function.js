/*
//Prompt
console.log("Quack - Pato ou Ganso?");

//Write 
document.write("Ganso!");

//Alert
alert("Cuidado com o write!");

confirm("Você aceita ser um ganso?");

prompt("È um pato ou ganso?");


//
let a; //indefinida  - esta vazio, mas esta salvando um espaço na memória para esta variavel
alert(a);
//


let a = "Olá mundo!"; //apesar de não ser declarado nenhum tipo ainda sim possu tipo //string

a = 42; //agora A virou um number

a = true; // virou boolean

a = (3 < 5); // boolean ainda - que vai resultar no resultado da expressão se 3 for menor 5 vai printar true na tela

alert(a); //printa true or false dependendo da expressão

//

a = null; //quando a variavel é definida mas é definica vazia, ela não tem nada ou não é encontrada (tipo fazer uma busca mas essa busca n tem nada) // quando voce precisa retornar alguma coisa mas nao tem o que retornar

//variavel ta indo la na minha pagina trazendo alguma coisa 
let nosso_paragrafo = document.querySelector("p");// selecionando o primeiro paragrafo apenas selector("p:nth-child(1)"); se tiver so um

nosso_paragrafo.innerHTML = nosso_paragrafo;
 */

//OBJETO

//criando uma função para colocar no objeto
function latir(som, numero) {
    for(let i = 0; i < numero; i++) {
        console.log(som);
    }
}


let cachorro = {
    comida_favorita: "carne de pato", 
    raca: "Shapei",
    comando: latir    
}

cachorro.comando("Au au", 7);

//gato

//receber a comida do gato
//da pra usar em qualquer parte do codigo
function comidaFav(comida_favorita){
    console.log(this.comida_favorita);
} 

//usando um for para repetir varias vezes

function comer() {
    for(let i = 0; i < 5; i++){
        console.log(gato.comida_favorita)
    }
}

let gato = {
    comida_favorita: "Sache(whiskas)",
    comida: comidaFav,
    comer: comer
}

gato.comer();
gato.comida(gato.comida_favorita);


/////////////////////////////////////////////////////
//se quiser a função direto no comando

let rato = {
    comida_favorita: "Queijo",
    comida: comidaFav,
    comer: function () {
        for(let i = 0; i < 5; i++){
            console.log(rato.comida_favorita)
        }
    }
}

rato.comer();


//função anonima (n tem nome)
let minha_funcao = function () {
    for(let i = 0; i < 5; i++){
        console.log(cachorro.comida_favorita)
    }
}

minha_funcao();

//ANONIMA

let minha_funcao_anonima = function () {
    for(let i = 0; i < 5; i++){
        console.log(gato.comida_favorita)
    }
}


// air function

let f_latir = (som, numero) => {
    for(let i = 0; i < numero; i++) {
        console.log(som);
    }
}



function somar(a, b){
    return a + b;
}

//resumindo a function somar -> air function 

let air_somar = (a, b) => a + b; //funciona apenas quando a função so retorna algo

air_somar(5, 10);