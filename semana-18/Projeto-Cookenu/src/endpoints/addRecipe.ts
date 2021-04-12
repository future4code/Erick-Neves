import { Request, Response } from "express";
import { getTokenData } from "../services/authenticator";
import { authenticationData, recipeBody, recipeType } from "../types";
import getUserById from './../data/getUserById';
import createRecipe from './../data/createRecipe';
import { generateId } from "../services/generateId";

const addRecipe = async (req: Request, res: Response) => {
  try {
    const id: string = generateId();
    const token: string = req.headers.authorization!;
    const tokenData: authenticationData | null = getTokenData(token);

    if (!tokenData) {
      res.statusCode = 401;
      throw new Error("Acesso não autorizado!");
    }

    const { title, description }: recipeType = req.body;
    const user = await getUserById(tokenData.id);
    const createdDate: number = Math.floor(Date.now() / 1000);

    // Caso queira visualizar no console o id e token do user que criou a receita
    console.log('token', tokenData)
    // console.log('user',user)

    for (let field in recipeBody) {
      if (!(field in req.body)) {
        res.statusCode = 422;
        throw new Error(`'${field}' campo obrigatório!`);
      }
    }

    if (title.length < 3) {
      res.statusCode = 422;
      throw new Error(`'title' deve ter no mínimo 3 caracteres!`);
    }

    if (description.length < 300) {
      res.statusCode = 422;
      throw new Error(`'description' passou de 300 caracteres!`);
    }

    await createRecipe(id, user?.userId, title, description, createdDate);

    res.status(201).send({ status: "Successo!", message: "Receita criada!" });
  } catch (error) {
      console.log(error.message)
    if (res.statusCode === 200) {
      res.status(500).send({ message: "Erro interno do servidor, informe ao administrador!" });
    } else {
      res.status(res.statusCode).send({ message: error.message });
    }
  }
};

export default addRecipe;