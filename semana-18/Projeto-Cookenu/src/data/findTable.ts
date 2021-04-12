import connection from "../connection";

const getRecipeById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
  SELECT CookenuRecipes.recipeId, 
  CookenuRecipes.userId, 
  CookenuUsers.name as username, 
  CookenuRecipes.title, 
  CookenuRecipes.description, 
  DATE_FORMAT(CookenuRecipes.createdDate, "%d/%m/%Y") as created
  FROM CookenuRecipes 
  JOIN CookenuUsers
  ON CookenuRecipes.userId =  CookenuUsers.userId
  WHERE CookenuRecipes.recipeId = "${id}"
  `);

  return result[0][0];
};

export default getRecipeById;