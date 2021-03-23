# **Exercicios da aula 45 - Aprofundamento SQL**

### **Exercicio 1:**

O SQL é um banco relacional e permite realizar queires complexas mais rapidamente do que bancos não relacionais. Uma das coisas que permite isso é o fato das tabelas serem muito bem definidas e com regras bem rigidas. Só que, às vezes, a gente pode errar ao começar modelando uma tabela: confundir o tipo de alguma coluna; esquecer de representar alguma informação e outras coisas. É por isso que é possível **alterar** as regras definidas por uma tabela. 

O comando que faz isso é o `ALTER`. O comando abaixo adiciona uma coluna na tabela de Actor para representar o sabor de sorvete favorito da celebridade

```sql
ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR(255);
```

Às vezes, gostaríamos de garantir que todos os dados anteriores a essa alteração tenham algum valor como padrão. Por exemplo, pense que, a partir de agora, gostaríamos de usar a tabela de Atores para guardar os diretores também; e, então, vamos adicionar um tipo: "Director" ou "NotDirector". Como ainda não temos nenhum diretor nessa tabela, seria legal que **todos os atores já salvos no banco até então** tivessem a coluna `type` com o valor "NotDirector". Para isso, indicamos um valor padrão/default:

```sql
ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";
```

Leia os comandos abaixo e indique o que eles fazem. **Não** os rode nas tabelas desse projeto! Explique o que elas fariam **se fossem** rodadas.  Você, provavelmente, terá que fazer algumas pesquisas para responder

*a.*

```sql
ALTER TABLE Actor DROP COLUMN salary;
```
>Alteração na tabela Actor, excluindo a coluna salary

*b.*

```sql
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
```
> Alteração na tabela Actor, com a mudança de ``gender`` para ``sex`` com o tipo variável de caracteres de no max. 6.

*c.* 

```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
```
> Alteração na tabela Actor, com a mudança de ``gender`` para o tipo variável de caracteres de no max. 255.

*d. Agora,  altere a coluna `gender` da tabela `ACTOR` para que ele aceite strings com até 100 caracteres*

```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

### **Exercicio 2:**



