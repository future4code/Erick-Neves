import { generateToken } from "../services/authenticator";
import getUserByEmail from "../data/getUserByEmail";
import { hash } from "../services/hashManager";
import { signUpInputs } from "../models/user";
import { convertStrToRole } from '../models/auth';
import { generateId } from "../services/idGenerator";
import createUser from "../data/createUser";

const bus_singUp = async (input: signUpInputs):Promise<string> => {
  try {
    const id: string = generateId();

    if (!input.name || !input.email || !input.password) {
      throw new Error("'email', 'password' são campos obrigatórios.");
    }

    if (input.password.length < 6) {
      throw new Error("'password' must be at least 6 characters!");
    }

    if(input.email.indexOf("@") === -1){
        throw new Error("Invalid Email");
    }

    const user = await getUserByEmail(input.email);
    if (user) {
      throw new Error(`${input.email} already registered!`);
    }

    const token = generateToken({ id, role: convertStrToRole(input.role!) });

    const cypherPassword = await hash(input.password);

    await createUser(id, input.name, input.email, cypherPassword, convertStrToRole(input.role!));

    return token
  } catch (error) {
    throw new Error(error.message);
  }
};

export default bus_singUp;