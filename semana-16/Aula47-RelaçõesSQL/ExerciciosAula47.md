# **Exercicios da aula 47 - Relações SQL**

### **Exercicio 1:**

*As avaliações estão diretamente relacionadas aos filmes. Cada filme pode ter várias avaliações; e uma avaliação está sempre atrelada a apenas um filme. Ou seja, é uma relação **1:N**. Essa situação é representada colocando uma referência da tabela de filmes na tabela de avaliação, através de uma chave estrangeira. Abaixo, há a Query que cria essa tabela*

```sql
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
)
```

**a. Explique o que é uma chave estrangeira**

É uma chave que tem ligação entre a ``primary key`` de outra tabela ou seja uma correlação entre ambas que são diferentes.

**b. Crie a tabela e, ao menos, uma avaliação para cada um dos filmes**
````sql
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie2_id VARCHAR(255),
    FOREIGN KEY (movie2_id) REFERENCES Movie2(id)
);
````
````sql
INSERT INTO Rating (id, comment, rate, movie2_id)
VALUES ( "001", "filme muito bom", 8, "002");
INSERT INTO Rating (id, comment, rate, movie2_id)
VALUES ( "002", "filme ruim", 5, "003");
INSERT INTO Rating (id, comment, rate, movie2_id)
VALUES ( "003", "filme ruim", 5, "004");
INSERT INTO Rating (id, comment, rate, movie2_id)
VALUES ( "004", "Excelente filme", 10, "005");
````
**c. Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.**
````sql
INSERT INTO Rating (id, comment, rate, movie2_id)
VALUES ( "100", "Excelente filme", 10, "006");

Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`epps-erick-neves`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie2_id`) REFERENCES `Movie2` (`id`))
````
*Código de erro: 1452. Não é possivel atualizar a linha pois a foreign key não corresponde aos críterios, não se relaciona com a tabela original pois não existe na tabela esse filme com o esse id.*

**d. Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.**

````sql
ALTER TABLE Movie DROP COLUMN rating_score;
````


**e. Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.**

````sql
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`epps-erick-neves`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie2_id`) REFERENCES `Movie2` (`id`))
````
*Código de erro: 1451. Não é possível excluir ou atualizar uma linha pai: uma restrição de chave estrangeira, pois está relacionada a outra tabela*

### **Exercicio 2:**

*vamos chamar essa tabela de `MovieCast` ("elenco do filme"). Ela vai possuir apenas duas colunas que fazem referências aos filmes e aos atores através de duas chaves estrangeiras.*

```sql
CREATE TABLE MovieCast (
	movie_id VARCHAR(255),
	actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
```

**a. Explique, com as suas palavras, essa tabela**

Criamos uma tabela com duas colunas com relação a outras duas tabela, movie_id como o id da tabela Movie e actor_id referencia a tabela Actor de acordo como diz nas chaves estrangeiras.

**b. Crie, ao menos, 4 relações nessa tabela**
````sql
INSERT INTO MovieCast(movie_id,actor_id)
VALUES ('001','002');
INSERT INTO MovieCast(movie_id,actor_id)
VALUES ('002','001');
INSERT INTO MovieCast(movie_id,actor_id)
VALUES ('003','004');
INSERT INTO MovieCast(movie_id,actor_id)
VALUES ('004','005');
````

**c. Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query**

**d. Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query**