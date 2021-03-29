import { Request, Response } from 'express'
import connection from '../connection'

const getCountActorByGender = async (
    req: Request,
    res: Response
 ): Promise<void> => {
    try {
        let aliasCount: string = ""
        if(req.query.gender === "male"){
            aliasCount = "Count male"
        } else if(req.query.gender === "female"){
            aliasCount = "Count female"
        } else {
            res.status(422).send('parametro inválido')
        }

        let userGender: string = req.query.gender as string
        const result = await connection.raw(`
           SELECT COUNT(*) AS "${aliasCount}" FROM Actor
           WHERE gender = "${userGender}"  
       `)
 
       res.status(200).send(result[0])
 
    } catch (error) {
       res.status(500).send("erro no servidor")
    }
 }
 
 export default getCountActorByGender;