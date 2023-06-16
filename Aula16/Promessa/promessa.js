/* Indica se a promessa é um sucesso ou não */
let retorna_sucesso = false;


function operacao_lenta() {
    let promessa = new Promise(
        (sucesso, falha) =>
        {
            if (retorna_sucesso)
                setTimeout(sucesso.bind(null, "Dados pedidos"), 3000);
            else
                setTimeout(falha.bind(null, "Erro informado"), 3000);
        }
    );

    return promessa;
}
