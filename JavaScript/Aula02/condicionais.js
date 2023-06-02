//Prompt
console.log("Quack - Pato ou Ganso?");

//Write 
document.write("Ganso!");

//Alert
alert("Cuidado com o write!");

let escolha = confirm("Você aceita ser um ganso?");


//esse if(escolha) ta dizendo que é true e o else se for falso // se for verdadeiro é para printar a imagem, se for falso é para a imagem continuar invisivel

if(escolha) {
    document.querySelector(".ganso").style.display = "inline-block";
  // document.querySelector(".ganso").setAttribute("class", "visivel");//atribuindo a classe 

  /*Como manter as classes???

  let minhas_classes = document.querySelector(".ganso").getAttribute("class");
  document.querySelector(".ganso").setAttribute("class",minhas_classes + " visivel"); */
} 

prompt("È um pato ou ganso?");
