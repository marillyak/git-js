/**
 * Função para calcular a média das notas de cada aluno.
 * 
 * @param {Array} alunos 
 * @returns {void} 
 */
function calcularMediaAlunos(alunos) {
   
    for (let i = 0; i < alunos.length; i++) {
        const nome = alunos[i][0]; 
        const notas = alunos[i].slice(1); 
        const media = (notas[0] + notas[1] + notas[2]) / 3; 

        console.log(`${nome} - Média: ${media}`);
    }
}

const alunos = [
    ['João', 7, 8, 9],
    ['Maria', 6, 7.5, 8.5],
    ['Pedro', 8, 9, 7.5]
];

calcularMediaAlunos(alunos);
