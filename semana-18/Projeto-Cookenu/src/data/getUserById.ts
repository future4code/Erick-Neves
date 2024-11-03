import connection from "../connection";

const getUserById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
  SELECT userId, name, email
  FROM CookenuUsers 
  WHERE userId = "${id}"
  `);

  return result[0][0];
};

export default getUserById;