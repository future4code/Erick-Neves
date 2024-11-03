import connection from "../connection";
import { user } from "../types";

const getUserById = async (id: string): Promise<user> => {
  const result = await connection.raw(`
    SELECT * FROM User WHERE id = "${id}"
    `);
  return result[0][0];
};

export default getUserById;