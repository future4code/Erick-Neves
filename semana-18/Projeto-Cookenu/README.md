#  Cookenu

## ✨ Tecnologias
Esse projeto foi desenvolvido com as seguintes tecnologias:

* React.js
* Typescript
* Express
* MySQL
* Knex
* dotEnv
* jsonwebtoken
* uuid
* bcryptjs
* nodemailer

## 💻 Projeto
Projeto desenvolvido durante a semana 18 do curso de Fullstack da Labenu. 

## 🚀 Como executar
* Instale as dependências com
```
  npm install
 ```
* Inicie o servidor com
 ```
 npm run start
 ```
* Crie as tabelas do arquivo ``table.sql`` em seu banco de dados.
* Faça as requisições
O arquivo ```request.rest``` possui as requisições realizadas.

*OBS: O arquivo ``.env`` deixei ignorado pelo git, se quiser rodar pelo seu banco de dados dessa mesma forma criar arquivo .env com seus dados de banco de dados:*
````DB_HOST = 
DB_USER = 
DB_SCHEMA = 
BCRYPT_COST = 12
DB_PASSWORD = 

JWT_KEY = 

NODEMAILER_USER = 
NODEMAILER_PASSWORD = 
````
*Na pasta raiz do projeto.*
*Digite o .env no .gitignore para caso faça um push para o git não expor seus dados pessoais do banco de dados*

## Desenvolvido por:
*Erick Charles Neves Cassiano*