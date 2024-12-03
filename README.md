# Exercício 14 React Components hands on

## Arquivo: DishdetailComponent.js

O arquivo ``DishdetailComponent.js`` é responsável por exibir os detalhes do prato selecionado e a lista de comentários associados. Ele utiliza o React e componentes do Reactstrap para estruturar e estilizar a interface.

**Funcionalidades**

1. **Renderização Condicional:**
- Verifica se um prato foi selecionado ``dish`` não é ``null``. Se nenhum prato estiver selecionado, retorna um ``div`` vazio.

2. **Exibição de Detalhes do Prato:**
- Utiliza o componente ``Card`` do Reactstrap para exibir:
* O nome do prato (como título do cartão).
* A descrição do prato (como texto no cartão).

3. **Exibição de Comentários:**
- Exibe uma lista de comentários relacionados ao prato. Cada comentário inclui:
- O texto do comentário.
- O autor e a data do comentário.
- A lista é exibida de forma não estilizada, usando as classes de lista do Bootstrap.

## Arquivo: MenuComponent.js

O arquivo ``MenuComponent.js`` gerencia a lista de pratos disponíveis no menu e permite que o usuário selecione um prato para visualizar seus detalhes no ``DishdetailComponent.``

**Funcionalidades**

1. **Gerenciamento de Estado:**
- Usa o ``useState`` do React para armazenar o prato atualmente selecionado.
- Quando o usuário clica em um prato, ele é definido como o prato selecionado.

2. **Renderização da Lista de Pratos:**
- Exibe uma lista de cartões para os pratos disponíveis. Cada cartão mostra:
- O nome do prato.
- A descrição do prato.
- Quando clicado, um prato é selecionado para exibição.

3. **Integração com ``DishdetailComponent``:**
- Passa o prato selecionado como uma propriedade (``props``) para o ``DishdetailComponent``.

## Bibliotecas Utilizadas

1. **React:**
- Biblioteca principal para construir a interface de usuário.
- Utilizada para criar componentes reutilizáveis como ``DishDetail`` e ``MenuComponent``.
- Gerenciamento de estado com hooks como ``useState``.

2. **Reactstrap:**
- Biblioteca de componentes React baseada no Bootstrap.
- Usada para estilizar o layout com componentes prontos, como:
- ``Card``: Para exibir detalhes do prato.
- ``CardTitle`` e ``CardText``: Para estruturar as informações no cartão.
- Beneficia-se da responsividade do Bootstrap.

3. **Bootstrap:**

- Framework CSS para criar layouts responsivos.
Classes utilizadas:
- ``row``, ``col-12``, ``col-md-5``: Para definir a disposição dos elementos.
- ``m-1``: Para espaçamento entre os elementos.

4. **JavaScript Padrão:**

- Manipulação de arrays e objetos, como a iteração sobre a lista de pratos e comentários.
- Uso de métodos como ``map()`` para gerar elementos dinamicamente.
 