import { connection } from "../data/connection"
import { User } from "../model/user"

export const selectUserByEmail = async (
   email: string
): Promise<User> => {
   try {
      const result = await connection("to_do_list_users2")
         .select("*")
         .where({ email })

      return {
         id: result[0].id,
         name: result[0].name,
         nickname: result[0].nickname,
         email: result[0].email,
         password: result[0].password,
         role: result[0].role
      }

   } catch (error) {
      throw new Error(error.slqMessage || error.message)
   }
}