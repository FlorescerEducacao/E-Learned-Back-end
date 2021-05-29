

<h1 align="center">
      <a href="#">Florescer Educação </a>
</h1>

<h4 align="center">
    Uma plataforma web para assistir e vender palestras online.
</h4>

<p align="center">


  <img alt="Repository size" src="https://img.shields.io/github/repo-size/thalesmoraisdealmeida21/E-Learned-Back-end?style=for-the-badge">







</p>

<h4 align="center">
	🚧   Em Desenvolvimento  🚧
</h4>

Tabela de conteúdos
=================
<!--ts-->
   * [Sobre o projeto](#-sobre-o-projeto)
   * [Funcionalidades](#-funcionalidades)
   * [Tecnologias](#-tecnologias)
   * [Como executar ?](#-como-executar-o-projeto)
   * [Como contribuir no projeto](#-como-contribuir-no-projeto)
   * [Autor](#-autor)
   * [Licença](#user-content--licença)
<!--te-->


## 💻 Sobre o projeto

 E Learned - É um projeto que visa acriação de um plataforma par vender e assistir cursos / palestras online. Contemplando desdeo cadastro de usuário até a compra e pagamento da palestra.


Este repositório contempla a API da plataforma, podendo ser acessada a versão front-end pela repositorio
  <a href="https://github.com/Thalesmoraisdealmeida21/E-Learned-Front-end">
    Repositorio Front-end Web (React)
  </a>

---

## ⚙️ Funcionalidades

- [x] Criação e autenticação de usuários
  - [x] Atualização de perfil do usuário
  - [x] Login do usuário (JWT)
  - [ ] Recuperação de senha


- [x] Criação e edição de palestras / Cursos
  - [x] Criação de palestras para venda (titulo, resumo, descrição, preço)
  - [x] Edição das palestras cadastradas

- [x] Compra de palestras
  - [x] Adição das palestras ao carrinho de compras
  - [x] Pagamento da palestra por boleto ou cartão de crédito (Foi implementado a API do pagar.me)
  - [x] Exclusão de items do carrinho

- [x] Criação de post para o blog (Criação de publicações para um blog que pode servir de referencia para vendas dos cursos)
  - [x] Criação do post (imagem, resumo, body)

- [x] Criação de depoimentos para uma página de vendas (Cria depoimentos para serem gerados em um página de vendas)
---






## 🚀 Como executar o projeto

Este projeto é divido em duas partes:
1. Backend (Este repositório)
<a href="https://github.com/Thalesmoraisdealmeida21/E-Learned-Front-end">
  2. Frontend
</a>



### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

## Banco de dados
Para que a aplicação execute corretamente é necessário configurar o banco de dados.

Para isto renomeie o arquivo ormconfig.example.json e edite o mesmo com as credenciais do seu banco de dados

<b>OBS: É necessário configurar o .env tanto para aplicação front-end quanto para a back-end</b>


#### 🎲 Rodando o Backend (Este repositório)

```bash

# Clone este repositório
$ git clone https://github.com/Thalesmoraisdealmeida21/E-Learned-Back-end.git

# Acesse a pasta do projeto no terminal/cmd
$ cd E-Learned-Back-end

# Execute o comando npm install ou yarn caso utilize ele
$ npm install ou yarn


# Execute a aplicação em modo de desenvolvimento
$ npm run dev:server ou yarn dev:server

# O servidor inciará na porta:3333 - acesse http://localhost:3333

```



#### 🧭 Rodando a aplicação web (Frontend)



```bash

# Clone este repositório
$ git clone https://github.com/Thalesmoraisdealmeida21/E-Learned-Front-end.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd E-Learned-Front-end

# Instale as depedencias do projeto
$ npm install ou yarn



# Execute a aplicação em modo de desenvolvimento
$ npm start ou yarn start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000

```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:



-   **[NodeJS](https://nodejs.org/en/)  +  [TypeScript](https://www.typescriptlang.org/))
-   **[Express](https://expressjs.com/)**
-   **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
-   **[Typeorm](https://typeorm.io/)**
-   **[PostgreSQL](https://www.postgresql.org/)**
-   **[ts-node](https://github.com/TypeStrong/ts-node)**
-   **[Multer](https://github.com/expressjs/multer)**






## 💪 Como contribuir no projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`




---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).



