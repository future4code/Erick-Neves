import dotenv from "dotenv"
import app from "./app"
import createUser from "./endpoints/put/createUser" 
import getUserById from "./endpoints/get/getUserById"
import editUserById from "./endpoints/post/editUserById"
import createTask from "./endpoints/put/createTask"
import getTaskById from "./endpoints/get/getTaskById"


dotenv.config()

app.get('/user/:id', getUserById)
app.put('/user', createUser)
app.post('/user/edit/:id', editUserById)

app.put('/task', createTask)
app.get('/task/:id', getTaskById)

