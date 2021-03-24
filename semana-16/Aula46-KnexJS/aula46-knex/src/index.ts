import app from './app'
import createActor from './endpoints/createActor'
import getAllActors from './endpoints/getAllActors'
import updateActor from './endpoints/updateActor'

app.post("/actor", createActor)
app.get("/actor", getAllActors)
app.put("/actor/:id", updateActor)