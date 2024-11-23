/**
 * Retorna o nome do dia da semana com base em um número de 1 a 7.
 * 
 * @param {number} dia - Um número representando o dia da semana (1 para Domingo, 7 para Sábado).
 * @returns {string} O nome do dia da semana correspondente ou "Número inválido" se o número estiver fora do intervalo.
 */

function definirDiaDaSemana(dia) {
    switch(dia){
        case '1':
            return 'Domingo';

        case '2':
            return 'Segunda';

        case '3':
            return 'Terça';

        case '4':
            return 'Quarta';
            
        case '5':
            return 'Quinta';

        case '6':
            return 'Sexta';
        
        case '7':
            return 'Sábado';

        default:
            return 'Item inválido';
    } 
}

console.log(definirDiaDaSemana(3));
console.log(definirDiaDaSemana(7));
console.log(definirDiaDaSemana(8));