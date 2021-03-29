import { Request, Response } from 'express'
import connection from '../connection'

const updateActorBySalary = async (
    req: Request,
    res: Response
): Promise<void> => {

    try {
        type actor = {
            id: number,
            salary: number,
        }

        const body: actor = {
            id: req.body.id,
            salary: req.body.salary,
        }

        if(!body.salary || !body.salary){
            res.status(422).send('Invalid Parameters.')
        } else {
            await connection("Actor")
            .update({
                salary: body.salary,
            })
            .where({id: body.id});
    
            res.status(201).end('Actor updated successfully')
        }
        
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal server error")
    }
};
export default updateActorBySalary;