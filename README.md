Aplicação Web - Trabalho WEB


Este repositório contém o projeto de uma aplicação web desenvolvida para a disciplina de Desenvolvimento Web. O projeto utiliza diversas tecnologias abordadas em sala de aula e integra funcionalidades de login, consulta de cotações de moedas e uma lista de cores.

Funcionalidades
1. Menu de Navegação
Todas as páginas da aplicação possuem um menu de navegação para facilitar a troca entre as telas.
2. Tela de Login
A tela inicial da aplicação é uma tela de login.
O login é feito através de uma requisição AJAX POST para a API https://reqres.in/api/login com as seguintes credenciais:
json
Copiar código
{
  "email": "eve.holt@reqres.in",
  "password": "cityslicka"
}
Caso a requisição seja bem-sucedida, o usuário é redirecionado para a tela inicial.
Em caso de falha, é exibida uma mensagem de erro.
3. Tela da Home
Após o login bem-sucedido, o usuário é redirecionado para a tela home, onde o e-mail do usuário logado é exibido centralizado.
4. Tela de Cotação
Esta tela faz uma requisição GET para a API https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL utilizando o método fetch.
Os pares de moedas são exibidos em uma tabela, juntamente com imagens representativas de cada moeda.
Documentação da API: AwesomeAPI - Moedas
5. Tela de Lista de Cores
A tela faz uma requisição GET para a API https://reqres.in/api/unknown.
A resposta da API é exibida em uma tabela com as seguintes informações:
Nome da cor
ID da cor
Cor em formato hexadecimal
Tecnologias Utilizadas
HTML5
CSS3
JavaScript (AJAX, Fetch)
APIs: Reqres e AwesomeAPI
Git/GitHub para versionamento de código
Como Executar o Projeto
Clone o repositório:
bash
Copiar código
git clone https://github.com/seu-usuario/trabalho-web.git
Navegue até o diretório do projeto:
bash
Copiar código
cd trabalho-web
Abra o arquivo index.html em seu navegador.
Considerações Finais
Todas as requisições possuem uma indicação de carregamento.
Erros nas requisições são tratados adequadamente.
O código foi enviado conforme solicitado pelo professor Vagner Tondello.
