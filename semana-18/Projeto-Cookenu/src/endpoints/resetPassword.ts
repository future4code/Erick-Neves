import { Request, Response } from "express";
import connection from "../connection";
import { hash } from "../services/hashManager";
// import transporter from "../services/mailer";
import getUserByEmail from "./../data/getUserByEmail";

export default async function resetPassword(
   req: Request,
   res: Response
): Promise<void> {
   try {
      const email = req.body.email

      if (!email) {
         res.statusCode = 409;
         throw new Error("Preencha o campo de e-mail");
       }
   
       const user = getUserByEmail(email);
       if (!user) {
         res.statusCode = 404;
         throw new Error("E-mail não encontrado");
       }

      //gerar nova senha
      const characters: string = "0123456789abcdefABCDEF@#-*"

      let newPassword: string = ""

      for (let i = 0; i < 5; i++) {

         const randomIndex: number = Math.floor(Math.random() * characters.length)

         newPassword += characters[randomIndex]
      }

      // //enviar para o email do usuário
      // const infoMail = {
      //    from: `ADMIN <${process.env.NODEMAILER_USER}>`,
      //    to: email,
      //    subject: "Solicitação de alteração de senha",
      //    text: "Senha alterada!",
      //    html: `
      //       <h2> Nova senha:</h2>
      //       <h3>${newPassword}</h3>    
      //    `,
      // };
      
      // const sender = await transporter.sendMail(infoMail);

      //salvar no banco
      const cypherPassword: string = await hash(newPassword);

      await connection("User")
         .update({ password: cypherPassword })
         .where({ email })

         res.status(200).send({
            message: `A senha do e-mail: ${email} foi alterada para um novo password: ${cypherPassword}`
          });
        } catch (error) {
          res.status(500).send("Erro interno do servidor, informe ao administrador!");
        } 
      }