import { Request, Response } from 'express'
import userTasksBusiness from '../business/userTasksBusiness'

const getUserTasks = async (
    req: Request, 
    res: Response
    ): Promise<Response> => {
        
  try {
    const { id } = req.params

    const userDTO = await userTasksBusiness(id)

    return res.status(200).send({
      message: 'Success!',
      user: userDTO.user,
      tasks: userDTO.tasks,
    })
  } catch (error) {
    return res.status(400).send(error.message)
  }
}

export default getUserTasks