/**
 * Função para gerenciar o estoque de itens.
 * 
 * @param {string[]} estoque 
 * @returns {void} 
 */
function gerenciarEstoque(estoque) {
 
    estoque[1] = 'marca-texto';

    console.log('Número total de itens no estoque:', estoque.length);
}

let estoque = [
    'lapis', 
    'caneta', 
    'caderno', 
    'post-it'
];

gerenciarEstoque(estoque);

