import connection from "../connection";

const createRecipe = async (
  recipeId: string,
  userId: string,
  title: string,
  description: string,
  createdDate: number
): Promise<void> => {
  await connection.raw(`
  INSERT INTO CookenuRecipes(recipeId, userId, title, description, createdDate)
  VALUES
  ("${recipeId}", "${userId}", "${title}", "${description}", FROM_UNIXTIME(${createdDate}))
  `);
};

export default createRecipe;