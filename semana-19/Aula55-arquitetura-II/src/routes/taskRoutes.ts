import { Router } from 'express'
import { createTask } from '../controller/createTask'
import { getTaskById } from '../controller/getTaskById'

const taskRoutes = Router()

taskRoutes.put('/task', createTask)
taskRoutes.get('/task/:id', getTaskById)

export default taskRoutes