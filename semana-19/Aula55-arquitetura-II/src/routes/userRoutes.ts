  import { Router } from 'express'
import getUserTasks from '../controller/getUserTasks'
import { login } from '../controller/login'
import { signup } from '../controller/signup'

const userRoutes = Router()
userRoutes.post('/user/signup', signup)
userRoutes.post('/user/login', login)
userRoutes.get('/user/tasks/:id', getUserTasks)

export default userRoutes