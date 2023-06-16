let promessa = operacao_lenta();
console.log(promessa);

function sucesso(valor){
    console.log("Sucesso "+ valor)
}

function fracasso(valor){
    console.log("Fracasso "+ valor)
}


promessa.then(sucesso, fracasso)


