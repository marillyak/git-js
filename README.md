# Exercícios de JavaScript (revisão)

## Exercício 1

- Escreva uma função que recebe um número como parâmetro representando a idade de uma pessoa e retorna um resultado.
- Criei uma função chamada `verificarIdade` que recebe um número(idade) e retorna se o usuário é maior ou menor de idade.

```js
/**
 * Verifica se uma pessoa é menor ou maior de idade.
 * 
 * @param {number} idade - A idade da pessoa.
 * @returns {string} Retorna "Menor de idade" se a idade for menor que 18, ou "Maior de idade" caso contrário.
 */
```

## Exercício 2 

- Crie uma função que recebe um número (1 a 7) representando os dias da semana.
- Criei uma função chamada `definirDiaDaSemana`, onde o usuário digita um número (1 a 7) que reprenta os dias da semana e retorna para o dia (nome)correspondente ao número.

```js
/**
 * Retorna o nome do dia da semana com base em um número de 1 a 7.
 * 
 * @param {number} dia - Um número representando o dia da semana (1 para Domingo, 7 para Sábado).
 * @returns {string} O nome do dia da semana correspondente ou "Número inválido" se o número estiver fora do intervalo.
 */
```

## Exercício 3

- Implemente uma função que recebe um número como parâmetro e utiliza um número operador ternário para retornar um resultado.
- Criei uma função chamada `parOuImpar`, onde o usuário vai digitar um número e vai retornar o resultado se o número é par ou ímpar.

```js
/**
 * Verifica se um número é par ou ímpar.
 * 
 * @param {number} numero - O número a ser verificado.
 * @returns {string} Retorna "Par" se o número for par, ou "Ímpar" caso contrário.
 */
```

## Exercício 4

- Implemente uma função que recebe um objeto com as propriedades: ``idade``, `isAdmin` e `isBlocked`. A função deve retornar `true` se o acesso for permitido e `false` caso o contrario.
- Criei uma função chamada `podeAcessar`, que verifica se um usuário pode acessar o sistema com base em suas propriedades.

```js
/**
 * Verifica se um usuário tem permissão para acessar o sistema.
 * 
 * @param {Object} usuario - Objeto que representa o usuário.
 * @param {number} usuario.idade - Idade do usuário.
 * @param {boolean} usuario.isAdmin - Indica se o usuário é administrador.
 * @param {boolean} usuario.isBlocked - Indica se o usuário está bloqueado.
 * @returns {boolean} Retorna true se o usuário pode acessar o sistema, ou false caso contrário.
 */
```

## Exercício 5

- Criar um arrow function que recebe dois argumentos. A função deve retornar o preço com o desconto aplicado.
- Crie uma função chamada ``calcularDesconto``, que calcula o preço final de um produto com base no desconto aplicado.

```js
/**
 * Calcula o preço final de um produto com base no desconto aplicado.
 * 
 * @param {number} precoOriginal - O preço original do produto.
 * @param {number} porcentagemDesconto - A porcentagem de desconto a ser aplicada.
 * @returns {number} O preço final do produto com o desconto aplicado.
 */
```