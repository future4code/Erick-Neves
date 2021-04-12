import app from './app';
import signUp from './endpoints/signUp';
import login from './endpoints/login';
import userProfile from './endpoints/userProfile';
import followedUser from './endpoints/followedUser';
import addRecipe from './endpoints/addRecipe';
import getProfile from './endpoints/getProfile';
import getRecipe from './endpoints/getRecipe';
import resetPassword from './endpoints/resetPassword';

app.post("/signup", signUp)

app.post("/login", login);

app.get("/users/profile", userProfile)

app.post("/users/follow", followedUser);

app.post("/recipes/create", addRecipe)

app.get("/users/:id", getProfile);

app.get("/recipes/:id", getRecipe);

app.post("/users/password/reset", resetPassword) 

