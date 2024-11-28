/**
 * Verifica se uma pessoa é menor ou maior de idade.
 * 
 * @param {number} idade - A idade da pessoa.
 * @returns {string} Retorna "Menor de idade" se a idade for menor que 18, ou "Maior de idade" caso contrário.
 */

function verificarIdade(idade) {
    if (idade < 18) {
        return "Menor de idade";
    } 
    else {
        return "Maior de idade";
    }
}

console.log(verificarIdade(15)); 
console.log(verificarIdade(18));
console.log(verificarIdade(21));