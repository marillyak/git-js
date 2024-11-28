/**
 * Função para exibir palavras em ordem reversa.
 * 
 * @param {string[]} palavras 
 * @returns {void} 
 */
function exibirPalavrasReverso(palavras) {

    for (let i = palavras.length - 1; i >= 0; i--) {
        console.log(palavras[i]);
    }
}

const palavras = [
    'maçã', 
    'banana', 
    'laranja', 
    'abacaxi', 
    'uva'
];

exibirPalavrasReverso(palavras);
