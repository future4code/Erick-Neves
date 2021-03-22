import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { accounts } from "./accounts"

const app = express();
app.use(express.json());
app.use(cors());

app.post("/users/create", (req: Request, res: Response) => {
  try {
    const {cpf, name, dateofBirthString} = req.body

    const [day, month, year] = dateofBirthString.split("/")  // de [05/07/1995 ] vai para [05, 07, 1995]

    const dateofBirth: Date = new Date(`${year}-${month}-${day}`)
    
    //necessario em qualquer endpoint:
    //validação das entradas da requisição
    const ageInMillis: number = Date.now() - dateofBirth.getTime()

    const ageInYears: number = ageInMillis / 1000 / 60 / 60 / 24 / 365

    if(ageInYears < 18){
      res.statusCode = 406
      throw new Error("Idade deve ser maior do que 18 anos.")
    }

    //consultar ou/e alterar a base de dados

    accounts.push({
      cpf,
      name,
      dateofBirth,
      balance: 0,
      statement:[]
    })

    //validar o resultado da consulta caso faça
    //ainda n fiz consulta, apenas alteração na base de dados

    //enviar a resposta
    res.status(201).send("Conta criada com sucesso!")
  } catch (error) {
    console.log(error)
    res.send(error.message)
  }
  
});

app.get("/users/all", (req: Request, res: Response) => {
    try {
      //se o array for vazio o account.length é 0, convertido para não zero exibindo o error
      if(!accounts.length){
        res.statusCode = 404
        throw new Error("Nenhuma conta encontrada")
      }
      res.status(200).send(accounts)
    } catch (error) {
      res.send(error.message)
    }
  }); 


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Error running in localhost`);
    }
});