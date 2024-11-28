/**
*Função que pede ao usuário para adivinhar um número entre 1 e 10 até acertar ou digitar "sair".
*
 * @returns {void} Não retorna nada.
 */
function adivinharNumero() {
    let numeroCorreto = 7; 

    while (true) {
        let resposta = prompt('Adivinhe o número entre 1 e 10 ou digite "sair" para sair:');

        if (resposta === 'sair') {
            console.log('Você saiu do jogo!');
            break;
        }

        if (parseInt(resposta) === numeroCorreto) {
            console.log('Parabéns, você acertou!');
            break;
        } else {
            console.log('Tente novamente!');
        }
    }
}

adivinharNumero();
