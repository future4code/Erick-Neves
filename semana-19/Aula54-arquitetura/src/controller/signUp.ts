import { Request, Response } from "express";
import bus_singUp from "../business/bus_singUp";
import { signUpInputs } from "../models/user";


const signUp = async (req: Request, res: Response) => {
  try {
    const { name, email, password, role = "NORMAL"} = req.body as signUpInputs;

    const token = await bus_singUp({ name, email, password, role });

    res.status(200).send({ token });
  } catch (error) {
    res.status(400).send(error.message);
  }
  
};

export default signUp;


