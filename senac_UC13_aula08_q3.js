/**
 * Verifica se um número é par ou ímpar.
 * 
 * @param {number} numero - O número a ser verificado.
 * @returns {string} Retorna "Par" se o número for par, ou "Ímpar" caso contrário.
 */

function parOuImpar(numero) {
    return numero % 2 === 0 ? "Par" : "Ímpar";   
}

console.log(parOuImpar(10));
console.log(parOuImpar(15)); 
console.log(parOuImpar(22));