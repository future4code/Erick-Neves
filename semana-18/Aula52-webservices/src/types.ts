export type authenticationData = {
   id: string,
   role: string
}

export type userCredentials = {
   email: string
   password: string
}

export type userPersonalInfo = {
   name: string
   nickname: string
}

export enum userRole {
   ADMIN = "ADMIN",
   NORMAL = "NORMAL"
}

export type addressInfo = {
   street: string
   neighbourhood: string
   city: string
   state: string
}

export type user = authenticationData & userCredentials & userPersonalInfo