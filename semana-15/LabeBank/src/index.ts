import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";

const app = express();
app.use(express.json());
app.use(cors());

type account = {
    cpf: number;
    name: string;
    date: string;
    saldo: number;
    transactions: [];
  };
  
  let users: account[] = [
    {
      cpf: 4588888884,
      name: "Erick",
      date: "05/07/1995",
      saldo: 0,
      transactions: [],
    },
    {
      cpf: 6588878889,
      name: "Grazi",
      date: "06/04/2015",
      saldo: 0,
      transactions: [],
    },
    {
        cpf: 7568878880,
        name: "Felipe",
        date: "03/03/2011",
        saldo: 0,
        transactions: [],
      },
  ];
  
  type transaction = {
    value: number;
    date: string;
    description: string;
  };
  
  let transactions: transaction[] = [
    {
      value: 5,
      date: "19/03/2021",
      description: "pix",
    },
  ];


app.get("/users/all", (req: Request, res: Response) => {
    res.send(users);
  });



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Error running in localhost`);
    }
});