/**
 * Calcula o preço final de um produto com base no desconto aplicado.
 * 
 * @param {number} precoOriginal - O preço original do produto.
 * @param {number} porcentagemDesconto - A porcentagem de desconto a ser aplicada.
 * @returns {number} O preço final do produto com o desconto aplicado.
 */

const calcularDesconto = (precoOriginal, porcentagemDesconto) => {
    const desconto = (precoOriginal * porcentagemDesconto) / 100;
    return precoOriginal - desconto;
};

console.log(calcularDesconto(100, 10));
console.log(calcularDesconto(250, 20));
