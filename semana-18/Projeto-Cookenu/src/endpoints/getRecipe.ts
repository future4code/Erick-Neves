import { Request, Response } from "express";
import { getTokenData } from "../services/authenticator";
import { authenticationData } from "../types";
import getRecipeById from './../data/getRecipeById';

const getRecipe = async (req: Request, res: Response) => {
  try {
    const id:string = req.params.id
    const token: string = req.headers.authorization!;
    const tokenData: authenticationData | null = getTokenData(token);

    if (!tokenData) {
      res.statusCode = 401;
      throw new Error("Acesso não autorizado!");
    }

    const recipe = await getRecipeById(id);

    res.status(200).send({ status: "Successo!", recipe: recipe });
  } catch (error) {
    console.log(error.message)
    if (res.statusCode === 200) {
      res.status(500).send({ message: "Erro interno do servidor, informe ao administrador!" });
    } else {
      res.status(res.statusCode).send({ message: error.message });
    }
  }
};

export default getRecipe;