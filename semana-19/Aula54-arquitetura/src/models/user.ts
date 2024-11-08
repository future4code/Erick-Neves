import { roles } from "./auth";

export type UserType = {
  id: string,
  name: string,
  email: string,
  password: string,
  role: string,
}

export type loginInputs = {
  email: string;
  password: string;
};

export type signUpInputs = {
  email: string;
  name: string;
  password: string;
  role?: roles | string;
};