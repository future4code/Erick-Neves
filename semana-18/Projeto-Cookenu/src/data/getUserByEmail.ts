import connection from "../connection";

const getUserByEmail = async (email: string): Promise<any> => {
  const result = await connection.raw(`
  SELECT *
  FROM CookenuUsers 
  WHERE email = "${email}"
  `);

  return result[0][0];
};

export default getUserByEmail;