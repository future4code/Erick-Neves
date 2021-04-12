import connection from '../connection';

const createUser = async (
  id: string,
  name: string,
  email: string,
  password: string,
  role: string
): Promise<void> => {
  await connection.raw(`
    INSERT INTO User_Arq(id, name, email, password, role) 
    VALUES("${id}", "${name}", "${email}", "${password}", "${role}")
    `);
};

export default createUser;