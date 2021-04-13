import express from 'express'
import cors from 'cors'
import { signup } from './controller/signup'
import { createTask } from './controller/createTask'
import { getTaskById } from './controller/getTaskById'
import { login } from './controller/login'

const app = express()

app.use(express.json())
app.use(cors())

app.post('/user/signup', signup)
app.post('/user/login', login)

app.put('/task', createTask)
app.get('/task/:id', getTaskById)

app.listen(3003, () => {
   console.log('Servidor rodando na porta 3003')
})