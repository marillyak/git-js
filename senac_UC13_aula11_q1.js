/**
 * Gerencia uma lista de tarefas.

 * @param {string[]} tarefas 
 * 
 * @returns {void}
 */

function executarTarefas(tarefas) {
    
    tarefas.push(
        'Comprar materiais de artesanato.',
        'Fazer revisão do livro: Educação pela paz.',
        'Fazer revisão da aula.'
    );

    const removerTarefa = tarefas.pop();

    console.log('Tarefas finais:', tarefas);
    console.log('Tarefa removida:', removerTarefa);
};

let tarefas = [];

executarTarefas(tarefas);

