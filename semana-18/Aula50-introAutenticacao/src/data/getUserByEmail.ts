import connection from "../connection";
import { user } from "../types";

const getUserByEmail = async (email: string): Promise<user> => {
  const result = await connection.raw(`
    SELECT * FROM User WHERE email = "${email}"
    `);
    return result[0][0]
};

export default getUserByEmail;