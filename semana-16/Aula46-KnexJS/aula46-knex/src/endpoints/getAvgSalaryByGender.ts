import { Request, Response } from 'express'
import connection from '../connection'


const getAvgSalaryByGender = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        let gender = ""

        if(req.query.gender === "male"){
            gender = "male"
        } else if(req.query.gender === "female"){
            gender = "female"
        } else {
            throw new Error('Invalid parameteres.')
        }

        const result = await connection("Actor")
        .avg("salary as average") 
            .where({
                gender: req.query.gender
            })
            
        res.status(200).send({average: `USD ${result[0].average.toFixed(2)}`})

    } catch (error) {
        console.log(error.message)
        res.status(500).send({error: error.message})
    }
}

export default getAvgSalaryByGender;