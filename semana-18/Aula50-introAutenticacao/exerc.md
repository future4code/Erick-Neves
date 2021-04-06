# **Exercicios da aula 50 - Intro. Autenticação**

### **Exercicio 1:**

*a. Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?*

 Sim, pois gera muito mais combinações de ids, com letras e numeros como caracteres, e ser em bem maior quantidade do que os números, gerando assim um token mais seguro.

*b. A partir de hoje vamos tentar isolar, ao máximo, as nossas lógicas dentro de funções. Isso vai deixar nosso código mais organizado e aumentar a facilidade da manutenção e refatoração. Dado isso, crie uma função para gerar um id.*

```tsx
import { v4 } from "uuid"

const generateId = (): string => v4()

export default generateId
```

### **Exercicio 2:**

*a. Explique o código com as suas palavras.*

atribui a constant userTableName ao chamando a tabela 'User'.
A connection é referente aos dados de acceso ao banco que dados que estão guardados no .env.

```sql
    CREATE TABLE User (
	id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);````

b)

### **Exercicio 3:**

*b. Comece criando a tabela de usuários. Coloque a query que você utilizou no arquivo de respostas.*
*c. Pela mesma justificativa do exercício anterior, crie uma função para ser responsável pela criação de usuários no banco.*

Antes de poder fazer o endpoint de cadastro, precisamos de uma forma para gerar o token de autenticação do usuário. Para isso, vamos usar o JWT. Ele possui uma função que permite gerar o token do usuário, que recebe três informações:

- os dados que serão salvos no token (no nosso caso, o id);
- a chave secreta usada pra criptografar o token;
- algumas configurações, como o tempo de expiração

*### **Exercicio 3:**. O que a linha `as string` faz? Por que precisamos usar ela ali?*

Define que será uma string o valor recebido

