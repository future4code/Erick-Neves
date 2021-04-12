import { Request, Response } from "express";
import { generateToken } from "../services/authenticator";
import { generateId } from "../services/generateId";
import { hash } from "../services/hashManager";
import { signUpType } from "../types";
import createUser from "./../data/createUser";
import getUserByEmail from "./../data/getUserByEmail";

const signUp = async (req: Request, res: Response) => {
  try {

    const id: string = generateId();

    const { email, name, password, role = "user" }: signUpType = req.body;

    if ( !email || !password || !name || !role ) {
        res.statusCode = 422
        throw new Error("Preencha os campos 'password', 'email', 'name'  e 'role' ")
     }

    if (password.length < 6) {
      res.statusCode = 422;
      throw new Error("'password' digite um password com até 6 caracteres");
    }

    const user = await getUserByEmail(email);
    if (user) {
      res.statusCode = 409;
      throw new Error("E-mail já registrado.");
    }

    // Gerando Token
    const token = generateToken({ id, role });

    // Encriptando senha
    const cypherPassword = await hash(password);

    await createUser(id, name, email, cypherPassword, role);

    res.status(201).send({ status: "Successo!", token: token });
  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: "Erro interno do servidor, informe ao administrador!" });
    } else {
      res.status(res.statusCode).send({ message: error.message });
    }
  }
};

export default signUp;