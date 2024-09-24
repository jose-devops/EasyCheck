Aplicação Web - Trabalho WEB

Este repositório contém o projeto de uma aplicação web desenvolvida para a disciplina de Desenvolvimento Web. O projeto utiliza diversas tecnologias abordadas em sala de aula e integra funcionalidades de login, consulta de cotações de moedas e uma lista de cores.

Funcionalidades

______________________________________________________________________________________________________________________________________________________________________________________________________________________________

Menu de Navegação: Todas as páginas da aplicação possuem um menu de navegação para facilitar a troca entre as telas.

Tela de Login:
1 - A tela inicial da aplicação é uma tela de login.

O login é feito através de uma requisição AJAX POST para a API Reqres com as seguintes credenciais
{
  "email": "eve.holt@reqres.in",
  "password": "cityslicka"
}

Caso a requisição seja bem-sucedida, o usuário é redirecionado para a tela inicial.
Em caso de falha, é exibida uma mensagem de erro.

______________________________________________________________________________________________________________________________________________________________________________________________________________________________

2 - Tela da Home:
Após o login bem-sucedido, o usuário é redirecionado para a tela home, onde o e-mail do usuário logado é exibido centralizado.

______________________________________________________________________________________________________________________________________________________________________________________________________________________________

3 - Tela de Cotação:
Esta tela faz uma requisição GET para a API AwesomeAPI utilizando o método fetch.

Os pares de moedas são exibidos em uma tabela, juntamente com imagens representativas de cada moeda.
Documentação da API: AwesomeAPI - Moedas

______________________________________________________________________________________________________________________________________________________________________________________________________________________________


4 - Tela de Lista de Cores:
A tela faz uma requisição GET para a API Reqres.

A resposta da API é exibida em uma tabela com as seguintes informações:
Nome da cor
ID da cor
Cor em formato hexadecimal

______________________________________________________________________________________________________________________________________________________________________________________________________________________________

Tecnologias Utilizadas

HTML5
CSS3
JavaScript (AJAX, Fetch)
APIs: Reqres e AwesomeAPI
Git/GitHub para versionamento de código

______________________________________________________________________________________________________________________________________________________________________________________________________________________________

Considerações Finais

Todas as requisições possuem uma indicação de carregamento.
Erros nas requisições são tratados adequadamente.
O código foi enviado conforme solicitado pelo professor Vagner Tondello.
