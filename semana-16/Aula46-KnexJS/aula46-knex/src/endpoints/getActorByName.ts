import { Request, Response } from 'express'
import connection from '../connection'

const getActorByName = async (
  req: Request,
  res: Response
  ): Promise<any> => {
    try {
      let userName: string = req.query.name as string
        const result = await connection.raw(`
           SELECT * FROM Actor
           WHERE name = "${userName}"  
       `)

       res.send(result[0])
      
    } catch (error) {
       res.status(500).send("Erro ao buscar nome no servidor")
      
    }
};

export default getActorByName