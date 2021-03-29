# **Exercicios da aula 46 - Knex**

```sql
ALTER TABLE Actor DROP COLUMN salary;
```

### **Exercicio 1:**

**a. Explique como é a resposta que temos quando usamos o `raw`.**

*Por raw é retornado todas as informações como estão no MySQL, então se pedidos todos os ``actors`` por exemplo retornará também arrays metadados além dos arrays atores. Sendo assim necessário nesse caso inicializar o índice de resultado em 0: ``res.send(result[0])`` uma forma de não precisar declarar inicialização com ``result[0]`` e fazer por Query Builders diretamente com JavaScript que knex vai criar a query*

**b. Faça uma função que busque um ator pelo nome;**

``` typescript
const getActorByName = async (
  req: Request,
  res: Response
  ): Promise<any> => {
    try {
      let userName: string = req.query.name as string
        const result = await connection.raw(`
           SELECT * FROM Actor
           WHERE name = "${userName}"  
       `)

       res.send(result[0])
      
    } catch (error) {
      console.log("Erro ao pegar o nome")
       res.status(500).send("Erro de busca no servidor")
      
    }
};
```

**c. Faça uma função que receba um `gender` retorne a quantidade de itens na tabela Actor com esse `gender`. Para atrizes, `female` e para atores `male`.**

```typescript
const getCountByGender = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const result = await connection.raw(`
            SELECT COUNT(*) AS Count
            FROM Actor
            GROUP BY gender
       `)

        res.send(result[0])

    } catch (error) {
        res.status(500).send("Erro do servidor ao contar gêneros")
    }
}
```

ou ainda:

````typescript
const getCountActorByGender = async (
    req: Request,
    res: Response
 ): Promise<void> => {
    try {
        let aliasCount: string = ""
        if(req.query.gender === "male"){
            aliasCount = "Count male"
        } else if(req.query.gender === "female"){
            aliasCount = "Count female"
        } else {
            res.status(422).send('parametro inválido')
        }

        let userGender: string = req.query.gender as string
        const result = await connection.raw(`
           SELECT COUNT(*) AS "${aliasCount}" FROM Actor
           WHERE gender = "${userGender}"  
       `)
 
       res.status(200).send(result[0])
 
    } catch (error) {
       res.status(500).send("erro no servidor")
    }
 }
 
 export default getCountActorByGender;
````
### **Exercicio 2: Utilize os queries builders para criar funções de Typescript que realizem as operações abaixo. Tente prestar atenção nos tipos das variáveis de entrada e de saída.**

**a. Uma função que receba um salário e um id e realiza a atualização do salário do ator em questão**

```typescript
const updateActorBySalary = async (
    req: Request,
    res: Response
): Promise<void> => {

    try {
        type actor = {
            id: number,
            salary: number,
        }

        const body: actor = {
            id: req.body.id,
            salary: req.body.salary,
        }

        if(!body.salary || !body.salary){
            res.status(422).send('Invalid Parameters.')
        } else {
            await connection("Actor")
            .update({
                salary: body.salary,
            })
            .where({id: body.id});
    
            res.status(201).end('Actor Update')
        }
        
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal server error")
    }
};
```


**b. Uma função que receba um id e delete um ator da tabela**

````typescript
const deleteActorById = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {

        if(!req.params.id){
            res.status(422).send('Invalid Parameters try again.')
        } else {
            await connection("Actor")
            .delete()
            .where({id: req.params.id});
    
            res.status(201).send('Actor was deleted')
        }
        
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal server error")
    }
};
````

**c. Uma função que receba um `gender` e devolva a média dos salários de atrizes ou atores desse `gender`**

````typescript
const getAvgSalaryByGender = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        let gender = ""

        if(req.query.gender === "male"){
            gender = "male"
        } else if(req.query.gender === "female"){
            gender = "female"
        } else {
            throw new Error('Invalid parameteres.')
        }

        const result = await connection("Actor")
        .avg("salary as average") 
            .where({
                gender: req.query.gender
            })
            
        res.status(200).send({average: `USD ${result[0].average.toFixed(2)}`})

    } catch (error) {
        console.log(error.message)
        res.status(500).send({error: error.message})
    }
}

export default getAvgSalaryByGender;
````

### **Exercicio 3:**

**a. Crie um endpoint com as especificações getActorById**
````typescript
const getActorById = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = req.params.id;
      const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `);
  
      res.status(200).send(result[0][0]);
    } catch (error) {
      res.status(400).send("Error");
    }
  };
````

**b. Crie um endpoint agora com as seguintes especificações:**

- Deve ser um GET (`/actor`)
- Receber o gênero como um *query param* (`/actor?gender=`)
- Devolver a quantidade de atores/atrizes desse gênero
- 
```` typescript
const getCountActorByGender = async (
    req: Request,
    res: Response
 ): Promise<void> => {
    try {
        let aliasCount: string = ""
        if(req.query.gender === "male"){
            aliasCount = "Count male"
        } else if(req.query.gender === "female"){
            aliasCount = "Count female"
        } else {
            res.status(422).send('parametro inválido')
        }

        let userGender: string = req.query.gender as string
        const result = await connection.raw(`
           SELECT COUNT(*) AS "${aliasCount}" FROM Actor
           WHERE gender = "${userGender}"  
       `)
 
       res.status(200).send(result[0])
 
    } catch (error) {
       res.status(500).send("erro no servidor")
    }
 }
 
 export default getCountActorByGender;

### 
GET http://localhost:3003/actor/search-gender/query-builder?gender=male
````

###