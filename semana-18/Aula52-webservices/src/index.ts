import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import login from './endpoints/login'
import resetPassword from "./endpoints/resetPassword";
import getAddressInfo from "./services/getAddressInfo";

app.post('/user/signup', createUser)
app.post('/user/login', login)
app.put('/user/edit', editUser)
app.post('/user/password/reset', resetPassword)

getAddressInfo("05424150").then(console.log) //lembrando que é um promisse precisa do .then para exibir no console o endereço