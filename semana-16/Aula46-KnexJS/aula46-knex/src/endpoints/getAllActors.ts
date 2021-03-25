import { Request, Response } from 'express'
import connection from '../connection'

const getAllActors = async (
   req: Request,
   res: Response
): Promise<void> => {
   try {

      //Jeito normal com SQL:

      // const result = await connection.raw(`
      //    SELECT * FROM Actor;
      // `)

      // res.send(result[0])   //Precisa do result[0] para começar do zero sem os metadados que são gerados por raw

      //Mesmo resultado mas com Query Builds, usando proprio typescript:

      const actors = await connection("Actor")

      res.send(actors)

   } catch (error) {
      console.log(error.message)
      res.status(500).send("Internal server error")
   }
}

export default getAllActors