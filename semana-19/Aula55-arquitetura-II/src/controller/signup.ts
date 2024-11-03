import { Request, Response } from "express";
import { signupBusiness } from "../business/signupBusiness";
import { signupInputDTO } from "../model/user";

export const signup = async (
   req: Request,
   res: Response
) : Promise<Response> => {
   try {

      //é responsabilidade da controller. Está capturando os valores da
      //requisição
      const { name, nickname, email, password, role } = req.body as signupInputDTO;

      //receber os valores que precisam ser enviados na resposta
      const token = await signupBusiness({ name, nickname, email, password, role });

      //enviar a resposta
      return res
         .status(201)
         .send({
            message: "Usuário criado!",
            token
         })

   } catch (error) {
      return res.status(400).send(error.message)
   }
}