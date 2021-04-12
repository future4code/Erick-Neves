import { Request, Response } from "express";
import { getTokenData } from "../services/authenticator";
import { authenticationData } from "../types";
import findTable from "./../data/findTable";
import addFollower from "../data/addFollower";
import connection from "../connection";
import getUserById from '../data/getUserById';
import { generateId } from "../services/generateId";

const followedUser = async (req: Request, res: Response) => {
  try {
    const { idFollow } = req.body;

    const token: string = req.headers.authorization!;
    const tokenData: authenticationData | null = getTokenData(token);
    if (!tokenData) {
      res.statusCode = 401;
      throw new Error("Acesso não autorizado!");
    }

    const followingUser = await getUserById(idFollow);
    if (!followingUser) {
      res.statusCode = 404;
      throw new Error(`Usuário não encontrado.`);
    }

    // Tabela de usuários seguidos e de seguidores
    const followingsTable: string = `Cookenu_Follows_${tokenData?.id}`;
    const findTableFollowing = await findTable(followingsTable);
    if (!findTableFollowing) {
      await connection.raw(`
      CREATE TABLE Cookenu_Follows_${tokenData?.id} 
      (
        id VARCHAR(300) PRIMARY KEY,
        userId VARCHAR(300) NOT NULL,
        FOREIGN KEY (userId) REFERENCES CookenuUsers(userId)
        ON DELETE CASCADE
        )
      `);
    }

    const followersTable: string = `Cookenu_Followers_${idFollow}`;
    const findfollowersTable = await findTable(followersTable);
    if (!findfollowersTable) {
      await connection.raw(`
      CREATE TABLE Cookenu_Followers_${idFollow} 
      (
        id VARCHAR(300) PRIMARY KEY,
        userId VARCHAR(300) NOT NULL,
        FOREIGN KEY (userId) REFERENCES CookenuUsers(userId)
        ON DELETE CASCADE
        )
      `);
    }

    const findFollowing = await connection.raw(`
    SELECT * FROM ${followingsTable} WHERE userId = "${idFollow}"
    `);
    if (findFollowing[0][0]){
      res.statusCode = 409
      throw new Error("Este usuário já está sendo seguido.")
    }

    const actionId: string = generateId();

    await addFollower(followingsTable, actionId, idFollow);
    await addFollower(followersTable, actionId, tokenData?.id!);

    res
      .status(201)
      .send({ status: "Successo!", message: `Seguindo ${followingUser.name}!` });
  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: "Erro interno do servidor, informe ao administrador!" });
      console.log(error.message);
    } else {
      res.status(res.statusCode).send({ message: error.message });
    }
  }
};

export default followedUser;