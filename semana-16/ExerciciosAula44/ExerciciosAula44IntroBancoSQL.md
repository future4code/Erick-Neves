# **Exercicios da aula 44 - Intro. Banco de dados e SQL**

### **Exercicio 1:**

### **a) Explique os demais comandos que estão nessa query.**

```sql
 CREATE TABLE Actor (
   id VARCHAR(255) PRIMARY KEY,  
   name VARCHAR (255) NOT NULL,
   salary FLOAT NOT NULL,
   birth_date DATE NOT NULL,
   gender VARCHAR(6) NOT NULL
 ;
```
1. **CREATE TABLE Actor**: Cria uma tabela para o nome especificado Actor que devem colunas nomeadas conforme primeiros nomes especificados nos itens(minúsculos) abaixo:

2. **id VARCHAR(255) PRIMARY KEY**: Variável que permite string, de no máximo 255 caracteres especificados entre parênteses, do tipo chave primaria da tabela(é unica não pode ser criada outra com mesmo id).

3. **name VARCHAR(255) NOT NULL**: Variável que permite string, de no máximo 255 caracteres, seu valor não pode ser vazio, preenchimento obrigatorio.

4. **salary FLOAT NOT**: Variável que permite um número com decimais(flutuante), seu valor não pode ser vazio, preenchimento obrigatorio.

5. **birth_date DATE NOT NULL**: Para dados do tipo data padrão YYYY-MM-DD, seu valor não pode ser vazio, preenchimento obrigatorio.

6. **gender VARCHAR(6) NOT NULL**: Variável que permite string, de no máximo 6 caracteres, seu valor não pode ser vazio, preenchimento obrigatorio.

### **b) O comando `SHOW` é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: `SHOW DATABASES` e `SHOW TABLES`. Explique os resultados.**

1. `SHOW DATABASES`: Exibe tabela com informações das databases information_schema de uso no meu caso epps-erick-neves.

2. `SHOW TABLES`:  Exibe tabela com informações de nomes de tabelas criadas na databese de uso no meu caso Tables_in_epps-erick-neves que foi a Actor.

### **c) O comando `DESCRIBE` pode ser usado para ver estrutura de uma tabela. Utilize o comando  `DESCRIBE Actor` e explique os resultados.**

- Exibe uma tabela descritiva com a estrutura de dados utilizadas no caso por Actor com seus campos de colunas os tipos de dados que foram criados, se é vazio, keys, valores def.

## **Exercicio 2: Colocando dados na tabela.**

### **a) Escreva uma query que crie a atriz `Glória Pires`, com o id `002`, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963.**
 .
```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
    "002",
    "Glória Pires",
    1200000,
    "1963-08-23",
    "female"
);
```

### **b) Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior `002`. Isso gerará um erro. Anote a mensagem de erro, explique porque esse erro aconteceu.**

`Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'` = Código de erro: 1062, Entrada duplicada '002' para chave 'PRIMÁRIA'. Pois chaves primárias tem valor único.

### **Tente usar as queries abaixo. Você vai reparar que elas vão gerar um erro. Anote as mensagens de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esses erros aconteceram. Por fim, corrija individualmente cada query para que funcione, teste o comando e anote-o também como resposta.**

### **c):**
```sql
INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```

`Error Code: 1136. Column count doesn't match value count at row 1` = Código de erro: 1136, A contagem de colunas não corresponde à contagem de valores na linha 1, Pois são 5 informações de colunas a serem passadas, mas na operação insert into actor() são passadas apenas 3.

### **d):**
```sql
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);
```

`Error Code: 1364. Field 'name' doesn't have a default value` =  Código de erro: 1364, O campo 'name' não tem um valor padrão. Pois é requerido o valor padrão para name, que está definido como obrigatório.

### **e):**
```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);
```

`Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1` = Código de erro: 1292, Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1. O tipo de valor inserido não é compativel com o esperado, pois no caso faltam colocar entre aspas a data.

### **f) Por fim, crie mais um ator e mais uma atriz.**

```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
```
```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```
## **Exercicio 3:**

**a. Escreva uma query que retorne todas as informações das atrizes**

```sql
SELECT id, nome from Actor WHERE id = "002"
```

**b. Escreva uma query que retorne o salário do ator com o nome `Tony Ramos`**

```sql
SELECT salary from Actor WHERE name = "Tony Ramos";
```

**c. Escreva uma query que retorne todas as informações que tenham o `gender` com o valor `"invalid"`. Explique o resultado.**

```sql
SELECT * from Actor WHERE gender = "invalid";

Retorna a tabela com o resultados vazios pois não há gender = "invalid"
```


**d. Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000**

```sql
SELECT id, name, salary from Actor WHERE salary < 500000;
```

**e. Tente usar a query abaixo. Você vai reparar que ela vai gerar um erro. Anote a mensagem de erro, traduza  e explique porque esse erro aconteceu. Por fim, corrija individualmente a query para que funcione, teste o comando e anote-o também como resposta**

```sql
SELECT id, nome from Actor WHERE id = "002"

Error Code: 1054. Unknown column 'nome' in 'field list' = Código de erro: 1136, Coluna 'nome' desconhecida em 'field list'. Pois o campo 'nome' não foi definido na tabela e sim o 'name'.
```

## **Exercicio 4:**

Queremos encontrar todos os atores e atrizes:

- cujos nomes começam com "A" ou "J"; e
- cujos salários são maiores do que R$300.000

Para fazer a primeira parte, vamos usar o comparador `LIKE`, que permite comparar strings. Para verificar se uma palavra começa com a letra "A", usamos a sintaxe: `LIKE "A%"` porque `%` indica uma string genérica. O operador "ou" é indicado por `OR`. Assim, a primeira condição é indicada por: `WHERE name LIKE "A%" OR name LIKE "J%"`. 

Já a segunda parte é simples: `salary > 300000`. O que pode confundir é o operador lógico "e" (`AND`). A ideia aqui é que todos os atores terão o salário maior do que R$300.000, mas seus nomes poderão começar com o "A" ou "J". Dessa forma, a query vai ficar dessa forma (preste atenção nos parênteses):

```sql
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000
```

Assim como o `LIKE` existem os operadores: 

- `BETWEEN`: permite verificar se um valor está entre dois: `BETWEEN valor1 AND valor2`.
- `NOT`: que indica uma negação de comparação. Pode ser usado antes de outros operadores como: `NOT LIKE`, `NOT BETWEEN`

**a. Explique com as suas palavras a query acima**

`Essa Query busca na tabela de Actor onde os atores tem nome iniciais com A ou J, e salario maior que 300.000, retornando a resposta destes se existirem.`

**b. Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00**

```sql
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;
```

**c. Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome.**

```sql
SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";
```

**d. Escreva uma query com os atores que tenham a lerta "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00**

```sql
SELECT * FROM Actor
WHERE 
	(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000;
```
   
## **Exercicio 5:**
**Precisamos criar a tabela de Filmes com as informações: id, nome, sinopse, data de lançamento e avaliação (que pode ser de 0 a 10)**

**a. Escreva a query que cria essa tabela. Para sinopse, utilize o tipo `TEXT`, pesquise sobre ele se precisar. Explique a query resumidamente.**

```sql
CREATE TABLE Movie2 (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating_score INT CHECK (rating_score BETWEEN 0 AND 10) NOT NULL
);
```
1. **CREATE TABLE Movie**: Cria uma tabela para o nome especificado Movie que devem colunas nomeadas conforme primeiros nomes especificados nos itens(minúsculos) abaixo:

2. **id VARCHAR(255) PRIMARY KEY**: Variável que permite string, de no máximo 255 caracteres especificados entre parênteses, do tipo chave primaria da tabela(é unica não pode ser criada outra com mesmo id).

3. **title VARCHAR(255) NOT NULL**: Variável que permite string, de no máximo 255 caracteres, seu valor não pode ser vazio, preenchimento obrigatorio.

4. **synopsis TEXT NOT NULL**: Variável que permite uma string de texto sem limite de tamanho, seu valor não pode ser vazio, preenchimento obrigatorio.

5. **release_Date DATE NOT NULL**: Para dados do tipo *data* padrão YYYY-MM-DD, seu valor não pode ser vazio, preenchimento obrigatorio.

6. **rating_score INT CHECK (rating_score BETWEEN 0 AND 10) NOT NULL**: Variável que permite números inteiros entre 0 e 10, seu valor não pode ser vazio, preenchimento obrigatorio.

### **Crie 4 filmes:**

```sql
INSERT INTO Movie2 (id, title, synopsis, release_Date, rating_score)
VALUES(
    "001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006/01/06",
    7
);
```
```sql
INSERT INTO Movie2 (id, title, synopsis, release_Date, rating_score)
VALUES(
    "002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012/12/27",
    10
);
```
```sql
INSERT INTO Movie2 (id, title, synopsis, release_Date, rating_score)
VALUES(
    "003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017/11/02",
    8
);
```
```sql
INSERT INTO Movie2 (id, title, synopsis, release_Date, rating_score) 
VALUES(
	"004",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
    9
);
```

## **Exercicio 6, Escreva uma query que:**

**a. Retorne o id, título e avaliação a partir de um id específico;**

```sql
SELECT id, title, rating FROM Movie2 WHERE id = "004";
```

**b. Retorne um filme a partir de um nome específico;**

```sql
SELECT * FROM Movie2 WHERE name = "Deus é Brasileiro";
```

**c. Retorne o id, título e sinopse dos filmes com avaliação mínima de `7`**

```sql
SELECT id, title, synopsis FROM Movie2 WHERE rating > 7;
```

## **Exercicio 7, Escreva uma query que:**

**a. Retorna um filme cujo título contenha a palavra `vida`**
```sql
SELECT * FROM Movie2
WHERE title LIKE "%vida%";
```

**b. Realize a pesquisa de um filme, ou seja: pesquise se o termo de busca está contido no título ou na sinopse. Utilize qualquer `TERMO DE BUSCA` para exemplificar.**
```sql
SELECT * FROM Movie2
WHERE title LIKE "%Deus%" OR
      synopsis LIKE "%Deus%";
```

**c. Procure por todos os filmes que já tenham lançado**
```sql
SELECT * FROM Movie2
WHERE release_date < "2021-03-23";
```

**d. Procure por algum filme que já tenha lançado, com o termo de busca contido no título ou sinopse e com a avaliação maior do que `7`.**
```sql
SELECT * FROM Movie2
WHERE release_date < "2021-03-23" AND 
      (title LIKE "%Brasileiro%" OR
      synopsis LIKE "%Brasil%") AND rating > 7;
```