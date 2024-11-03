USE `epps-erick-neves`;

CREATE TABLE CookenuUsers (
    userId VARCHAR(300) PRIMARY KEY,
    name VARCHAR(300) NOT NULL,
    email VARCHAR(75) NOT NULL UNIQUE,
    password VARCHAR(300) NOT NULL,
    role VARCHAR(30) NOT NULL 
);

CREATE TABLE CookenuRecipes (
    recipeId VARCHAR(300) PRIMARY KEY,
    userId VARCHAR(300),
    title VARCHAR(300) NOT NULL,
    description TEXT NOT NULL,
    createdDate Date NOT NULL,
    FOREIGN KEY (userId) REFERENCES CookenuUsers(userId)
    ON DELETE CASCADE
) 