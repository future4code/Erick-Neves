import { Request, Response } from "express"
import connection from "../connection"
import getUserByEmail from "../data/getUserByEmail"
import { generateToken } from "../services/authenticator"
import validEmail from "../services/validEmail"
import { userCredentials } from "../types"

const login = async (
   req: Request,
   res: Response
) => {
   try {

      const { email, password }: userCredentials = req.body

      if(!email || !password){
         res.statusCode = 422
         throw new Error("'email' e 'senha' são obrigatórios ")
      }

      // const [user] = await connection("to_do_list_users2")
      //    .where({ email })

      if (!req.body.password || req.body.password.length < 6) {
         throw new Error("Senha inválida!");
      }

      if(!validEmail(email)){
         res.statusCode = 422;
         throw new Error("Digite um e-mail com formato válido.");
       }
      
      const user = await getUserByEmail(email)

      if(!user){
         res.statusCode = 404;
         throw new Error(`This E-mail is not registered!`);
       }
      
      // if (!user || user.password !== password) {
      //    res.statusCode = 401
      //    throw new Error("Credenciais inválidas")
      //  }
   
      if (password !== user.password) {
         res.statusCode = 404;
         throw new Error(`Invalid password!`);
       }

      const token: string = generateToken({ id: user.id })

      res.send({ token })

   } catch (error) {

      if (res.statusCode == 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
   }
}

export default login;