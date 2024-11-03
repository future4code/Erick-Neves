import * as jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { AuthenticationData } from "../models/auth"

dotenv.config()

// const myToken = jwt.sign(
//    {
//       id: "123456"
//    },
//    "hklsdf9347583945yfgdfiguydifgdgdf",
//    {
//       expiresIn: "24d"
//    }
// )

export const generateToken = (
   payload: AuthenticationData
): string => {
   return jwt.sign(
      payload,
      process.env.JWT_KEY!,
      { expiresIn: "24d" }
   )
}

export const getTokenData = (
   token: string
): AuthenticationData | null => {
   try {

      const { id, role } = jwt.verify(token, process.env.JWT_KEY!) as AuthenticationData

      return { id, role }

   } catch (error) {

      console.log(error.message);
      return null
   }
}


// console.log(
//    jwt.verify(
//       myToken,
//       "hklsdf9347583945yfgdfiguydifgdgdf"
//    )
// )