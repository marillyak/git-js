# Exercícios de JavaScript (revisão)

## Exercício 1

- Crie um script que gerencie uma lista de tarefas.
- Criei uma função chamada `executarTarefas` que recebe um array vazio chamado `tarefas`, adicionei três tarefas e utilizei o método `.push()`. Removi a última tarefa usando o `.pop()` e exibi o array final no console.
```js
/**
 * Gerencia uma lista de tarefas.

 * @param {string[]} tarefas 
 * 
 * @returns {void}
 */
```

## Exercício 2 

- Crie um script que gerencie um estoque.
- Criei uma função chamada `gerenciarEstoque` que recebe um array chamado `estoque` com 4 produtos, atualizei o segundo array e no lugar dele adicionei um novo produto (marca-texto) e exibi o número total de itens no estoque usando o `.length`.

```js
/**
 * Função para gerenciar o estoque de itens.
 * 
 * @param {string[]} estoque 
 * @returns {void} 
 */
```

## Exercício 3

- Crie um script que armazene as notas de três alunos em um array aninhado.
- Criei uma função chamada `calcularMediaAlunos` que recebe um array chamado `alunos`, dentro desse arrya contem as notas e o nome do aluno. Usei um loop aninhado para calculara media das notas de cada aluno e exibi no console o nome de cadaaluno com a suas medias.


```js
/**
 * Função para calcular a média das notas de cada aluno.
 * 
 * @param {Array} alunos 
 * @returns {void} 
 */
```

## Exercício 4

- Crie um script que leia um array de palavras e exiba cada palavra no console em ordem reversa.
- Criei uma função chamada ``exibirPalavraReverso`` que recebe um array chamado ``palavras`` e dentro coloquei 5 palavras. Usei um loop reverso ``for`` para percorrer o array a partir do último item até o primeiro e exibi cada palavra no console.

```js
/**
 * Função para exibir palavras em ordem reversa.
 * 
 * @param {string[]} palavras 
 * @returns {void} 
 */
```

## Exercício 5

- Crie um script que peça ao usuário para adivinhar um número entre 1 e 10.
- Criei uma função chamada ``jogoAdivinhacao`` que usa um loop while para continuar pedindo ao usuário para adivinhar o número até ele acertar ou digitar "sair". Dentro do loop, se o usuário acerta, uma mensagem de sucesso é exibida. Se o usuário digitar "sair", o loop é interrompido com uma mensagem de saída.

```js
/**
*Função que pede ao usuário para adivinhar um número entre 1 e 10 até acertar ou digitar "sair".
*
 * @returns {void} Não retorna nada.
 */
```