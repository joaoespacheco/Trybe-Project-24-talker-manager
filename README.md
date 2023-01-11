# Talker Manager 🎙️

## 📄 Sobre:

Projeto desenvolvido durante o módulo de back-end do curso de desenvolvimento web da [Trybe](https://www.betrybe.com/).

Neste projeto foi desenvolvida uma API de cadastro de palestrantes, onde é possível cadastrar, visualizar, pesquisar, editar e excluir informações.

Os principais objetivos desse projeto foram:
> * Desenvolver uma API de um CRUD (Create, Read, Update e Delete) de palestrantes
> * Desenvolver alguns endpoints que irão ler e escrever em um arquivo utilizando o módulo fs

</br>
<details>
<summary><strong>Desempenho</strong></summary>
Aprovado com 100% de desempenho em todos os requisitos
</details>

<details>
<summary><strong>Requisitos</strong></summary>
</br>
<strong>Requisitos obrigatórios:</strong> </br>

1. Crie o endpoint GET /talker
> * A requisição deve retornar o status 200 e um array com todas as pessoas palestrantes cadastradas
> * Caso não exista nenhuma pessoa palestrante cadastrada a requisição deve retornar o status 200 e um array vazio

2. Crie o endpoint GET /talker/:id
> * A requisição deve retornar o status 200 e uma pessoa palestrante com base no id da rota
> * Caso não seja encontrada uma pessoa palestrante com base no id da rota, a requisição deve retornar o status 404 com a messagem "Pessoa palestrante não encontrada"

3. Crie o endpoint POST /login
> * O endpoint deverá receber no corpo da requisição os campos email e password e retornar status 200 com um token aleatório de 16 caracteres

4. Adicione as validações para o endpoint /login
> * Os campos recebidos pela requisição devem ser validados e, caso os valores sejam inválidos, o endpoint deve retornar o código de status 400 com a respectiva mensagem de erro ao invés do token

5. Crie o endpoint POST /talker
> * Os campos recebidos pela requisição devem ser validados, e caso sejam inválidos, devem retornar o status correpondente ao erro e uma mensagem descrevendo o erro
> * O endpoint deve ser capaz de adicionar uma nova pessoa palestrante ao arquivo
> * A requisição deve ter o token de autenticação nos headers, no campo authorization
> * Caso esteja tudo certo, deve retorne o status 201 e a pessoa cadastrada

6. Crie o endpoint PUT /talker/:id
> * Os campos recebidos pela requisição devem ser validados, e caso sejam inválidos, devem retornar o status correpondente ao erro e uma mensagem descrevendo o erro
> * O endpoint deve ser capaz de editar uma pessoa palestrante com base no id da rota, sem alterar o id registrado
> * A requisição deve ter o token de autenticação nos headers, no campo authorization
> * Caso esteja tudo certo, deve retorne o status 200 e a pessoa editada

7. Crie o endpoint DELETE /talker/:id
> * A requisição deve ter o token de autenticação nos headers, no campo authorization
> * O endpoint deve deletar uma pessoa palestrante com base no id da rota. Devendo retornar o status 204, sem conteúdo na resposta

8. Crie o endpoint GET /talker/search?q=searchTerm
> * A requisição deve ter o token de autenticação nos headers, no campo authorization.
> * O endpoint deve retornar status 200 e um array de palestrantes que contenham em seu nome o termo pesquisado no queryParam da URL, caso não encontre nínguem deverá ser um array vazio
> * Caso não seja inserido um termo de busca deverá retornar status 200 e um array contendo todos os palestrantes
</details>
</br>

## 📑 Documentação:

### Acessando documentação com aplicação rodando localmente:
Com a aplicação em execução utilize a rota http://localhost:3000/api-docs para acessar a documentação e testar a API. Se preferir, utilize um cliente de requisições HTTP de sua preferência (Insomnia, Thunder Client, etc) para fazer as requisições.

### Acessando documentação online:
Para acessar a documentação através de uma plataforma online sem a necessidade de executar localmente <strong> [clique aqui](https://swaggerviewer.ptr.red/spec/aHR0cHM6Ly9naXRodWIuY29tL2pvYW9lc3BhY2hlY28vVHJ5YmUtUHJvamVjdC0yNC10YWxrZXItbWFuYWdlci9yYXcvbWFpbi9zcmMvc3dhZ2dlci5qc29u) </strong>
      
</br>


## 🤹🏽 Habilidades Desenvolvidas:
* Criar uma API utilizando Express.js
* Criar rotas http
* Criar middlewares
* Realizar validações das informações e tratamento das respostas
</br>

## 🧰 Ferramentas:
* JavaScript
* Node.js
  * Express.js
* Docker
</br>

## 📝 Desenvolvido por:
* [João Emanuel Soares Pacheco](https://github.com/joaoespacheco)
