import { Request, Response } from "express";
import { getTokenData } from "../services/authenticator";
import { authenticationData } from "../types";
import getUserById from './../data/getUserById';

const userProfile = async (req: Request, res: Response) => {
  try {
    const token: string = req.headers.authorization!;
    const tokenData: authenticationData | null = getTokenData(token);

    if (!tokenData) {
      res.statusCode = 401;
      throw new Error("Acesso não autorizado!");
    }

    const user = await getUserById(tokenData.id);

    res.status(200).send({ status: "Successo!", user: user });
  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: "Erro interno do servidor, informe ao administrador!" });
    } else {
      res.status(res.statusCode).send({ message: error.message });
    }
  }
};

export default userProfile;