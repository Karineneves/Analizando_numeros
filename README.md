### Descrição do Projeto: Analisador de Números

Este projeto é uma aplicação simples em JavaScript que permite ao usuário adicionar números a uma lista e, em seguida, analisar as propriedades desses números, como o maior, menor, soma e média. 

### Funcionalidades

- *Adicionar Número:* O usuário pode inserir um número no campo de texto. O código verifica se o número está entre 1 e 100, e se já foi adicionado anteriormente. Se o número for válido e único, ele é adicionado à lista exibida na interface.
- *Analisar Números:* Após adicionar os números desejados, o usuário pode clicar no botão de "Analisar" para calcular:
  - O total de números adicionados.
  - O maior valor.
  - O menor valor.
  - A soma de todos os números.
  - A média dos números adicionados.

### Estrutura do Código

- *adicionarNumero()*: Esta função é chamada ao clicar no botão "Adicionar". Ela:
  1. Verifica se o campo de entrada está vazio.
  2. Converte o valor inserido em número e verifica se está entre 1 e 100.
  3. Checa se o número já foi adicionado anteriormente.
  4. Adiciona o número à lista se for válido.
  
- *analisarNumeros()*: Esta função é chamada ao clicar no botão "Analisar". Ela:
  1. Verifica se há números adicionados.
  2. Calcula o maior, menor, soma e média dos números adicionados.
  3. Exibe os resultados na interface.

### Uso

Este código é ideal para quem está aprendendo JavaScript e quer entender melhor a manipulação de arrays, loops e a interação com o DOM (Document Object Model).

### Exemplo de Uso

1. Digite um número no campo e clique em "Adicionar".
2. Repita até adicionar todos os números desejados.
3. Clique em "Analisar" para ver as estatísticas dos números adicionados.
