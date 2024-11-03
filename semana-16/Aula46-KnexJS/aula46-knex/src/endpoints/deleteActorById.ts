import { Request, Response } from 'express'
import connection from '../connection'

const deleteActorById = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {

        if(!req.params.id){
            res.status(422).send('Invalid Parameters try again.')
        } else {
            await connection("Actor")
            .delete()
            .where({id: req.params.id});
    
            res.status(201).send('Actor was deleted')
        }
        
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal server error")
    }
};
export default deleteActorById;