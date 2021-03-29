import app from './app'
import createActor from './endpoints/createActor'
import deleteActorById from './endpoints/deleteActorById'
import getActorById from './endpoints/getActorById'
import getActorByName from './endpoints/getActorByName'
import getAllActors from './endpoints/getAllActors'
import getCountByGender from './endpoints/getCountActorByGender'

import getCountActorByGender from './endpoints/getCountActorByGender';
import getCountActorByGenderQueryBuild from './endpoints/getAvgSalaryByGender';
import updateActorBySalary from './endpoints/updateActorBySalary'

app.post("/actor", createActor)

app.get("/actor", getAllActors)
app.get('/actor/search_name', getActorByName)
app.get("/actor/:id", getActorById)


app.get("/actor/gender", getCountByGender)
app.get('/actor/search-gender/query-builder', getCountActorByGenderQueryBuild)
app.get('/actor/search-gender', getCountActorByGender)


app.put("/actor/update_salary", updateActorBySalary)
app.delete("/actor/delete/:id", deleteActorById)

