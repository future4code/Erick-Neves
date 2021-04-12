import { Request, Response } from "express"
import { generateToken } from "../services/authenticator"
import { loginType } from "../types"
import { compare } from "../services/hashManager"
import getUserByEmail from "../data/getUserByEmail"

export default async function login(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { email, password }: loginType = req.body

      if (!email || !password) {
         res.statusCode = 422
         throw new Error("'email' e 'senha' são obrigatórios ")
      }

      const user = await getUserByEmail(email)
      if(!user){
         res.statusCode = 404;
         throw new Error(`E-mail não encontrado!`);
      }

      const hashCompare = await compare(password, user.password);

      if (!user || !hashCompare) {
         res.statusCode = 401;
         throw new Error("Credenciais inválidas");
      }

      const token: string = generateToken({ id: user.userId, role: user.role })

      res.status(200).send({status: "Successo!", token: token})

   } catch (error) { 

      if (res.statusCode == 200) {
         res.status(500).send({ message: "Erro interno do servidor, informe ao administrador!" })
      } else { 
         res.status(res.statusCode).send({ message: error.message });
      } 
   }
}