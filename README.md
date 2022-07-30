<h1 align="center">

<p align="center"><b> Maria Chuteira </b> 💙⚽ <p>

# <br> Projeto Final {Reprograma} - Maria Chuteira

## Este é projeto final da iniciativa TeT(Todas em Tech) do curso de Desenvolvedora Backend | Turma On16 da [{Reprograma}](https://www.reprograma.com.br/).

<br>
<br>

 Este projeto é uma API com CRUD completo que contém um banco de dados, Autenticação e Login

<br>
<br>

<!--ts-->

- [👧🏾 Objetivo](#-Objetivo)
- [📁 Arquitetura do Projeto](#-Arquitetura-do-Projeto)
- [👩🏾‍💻 Tecnologias e Dependências Utilizadas](#-Tecnologias-e-Dependências-Utilizadas)
- [👩🏾‍🔧 Instalação](#-Instalação)
- [⚗️ Interface Gráfica Para Realizar os Testes](#-Interface-Gráfica-Para-Realizar-os-Testes)
- [🔓 Preparando o Ambiente Para Autenticação](#-Preparando-o-Ambiente-Para-Autenticação)
- [🙋🏾‍♀️ Autora](#-Autora)


<!--te-->

<br>
<br>

## 👧🏾 Objetivo

<br>

API capaz de executar um CRUD em um banco de dados. O conteúdo da API é reunir informações referentes a partidas, "rachas" combinados por mulheres. Rachas são partidas de futebol/futsal amadoras. 

<br>
<br>


## 📁 Arquitetura do Projeto

<br>

Lembre-se que a arquitetura ao final do projeto precisa ficar exatamente dessa maneira. 

```
 📁ENECRESCER
   |
   |--📁node_modules
   |
   |--📁 src
   |  ||
   |  ||
   |  ||--📁 controllers
   |  |    |- 📄 matchesController.js
   |  |    |- 📄 usersController.js
   |  |
   |  ||--📁 database
   |  |    |- 📄 mongooseConnect.js
   |  |
   |  ||--📁 models
   |  |    |- 📄 matchesModel.js
   |  |    |- 📄 userModels.js
   |  |
   |  ||--📁 routes
   |  |    |- 📄 index.js
   |  |    |- 📄 matchesRoutes.js
   |  |    |- 📄 userRoutes.js
   |  |
   |  ||-📄 app.js
   |  |
   |  |--📁 swagger
   |  |   |- 📄 swagger_output.json
   |- 📄 .env
   |- 📄 .env.example
   |- 📄 .gitignore
   |- 📄 package-lock.json
   |- 📄 package.json
   |- 📄 Procfile
   |- 📄 README.md
   |- 📄 server.js
   |- 📄 swagger.js

```

<br>
<br>


## 👩🏾‍💻 Tecnologias e Dependências Utilizadas

<br>

| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação. |
| `node.js`    | Ambiente de execução do javascript.|
| `express`    | Framework NodeJS. |
| `mongoose`   | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections.|
| `nodemon`    | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente.|
| `npm ou yarn`| Gerenciador de pacotes.|
| `MongoDb`    | Banco de dados não relacional orietado a documentos.|
| `Mongo Atlas`| Interface gráfica para verificar se os dados foram persistidos.|
| `Postman` | Interface gráfica para realizar os testes.|
| `jsonwebtoken `| Dependência que implementa o protocolo JSON Web Token.|
| `bcrypt`| Bcryptjs é uma biblioteca para encriptação de dados. Neste caso, o dado a ser criptografado é o password.|
| `dotenv`| Dependência  para gerenciar facilmente variáveis de ambiente, não é obrigatório para JWT, mas uma boa prática para configurações em geral.|
| `swagger`| Gera a documentação.|
| `heroku`| hospeda a documentação.|

<br>
Link para a documentação:

📝 [Swagger](https://mariachuteira.herokuapp.com/mariachuteira-documentation/#/)

📝 [Heroku](https://mariachuteira.herokuapp.com/)

<br>
<br>

## 👩🏾‍🔧 Instalação

<br>

```ps
# Clonar o repositório
$ git clone https://github.com/lidslira/maria-chuteira-api

# Entrar na pasta do repositório
$ cd maria-chuteira-api

# Instalar as dependências
$ npm install

# Executar o servidor para que você possa rodar o projeto localmente
$ npm start
```
<br>
<br>


## ⚗️ Interface Gráfica Para Realizar os Testes

<br>

📌 Este projeto está com os métodos HTTP organizados. Você pode testar as rotas Get, Post,Delete e Patch através de qualquer ferramenta cliente API REST, como Insomnia, Thunder Client, Postman, entre outros. Nesse projeto, utilizamos o [Postman](https://www.postman.com/downloads/). A interface é um CRUD.
<br>
<br>

## 🔓 Preparando o Ambiente Para Autenticação

<br>

⚠️ Criar arquivo .env (adicionar no .gitignore) e usar o arquivo .env.example como modelo, colocando assim os seus dados.

Seguir a ordem de instalações no terminal:

- Inicialize o comando de instalação `npm i express cors` para instalar o cors.
- Inicialize o comando de instalação `npm i --save-dev dotenv` para instalar dontenv.
- Inicialize com o comando `npm start` para que você possa executar os testes.

<br>
<br>

 *PROTEÇÃO* Para testar via Postman, passar bearer token no header de autenticação $ Bearer Token

<br>



Projeto criado com a orientação e cuidado da Professora [Mayhhara F Lilian](https://github.com/mflilian)!<br>

<span align="center">

###  Muito obrigada a você que chegou até aqui! 💜 </h2>

</br>

</span>

## 🌻 Autora

</br>

<p align="center">
<a>
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/71519239?v=4" width="100px;" alt="Foto de Perfil de Ana Lídia"/>
 <br/>
</a>
</p>

<p align="center"> Desenvolvido por <a href="https://www.linkedin.com/in/analidialira" target="_blank"><img src="https://img.shields.io/badge/-Ana_Lidia-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/analidialira/" target="_blank"></a> </p>

<p align="center">
<img src="https://user-images.githubusercontent.com/84551213/171416454-ab93ab7f-e5a0-4276-81ec-4f5cb79dff31.png" alt="logo da reprograma" border="0" width = "200" /> <p align="center"></p>