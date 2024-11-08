import knex from 'knex'
import dotenv from 'dotenv'

//Lembrar do npm i dotenv, e criar o .env na raiz do projeto
dotenv.config()

const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_SCHEMA,
      port: 3306,
      multipleStatements: true
   }
})

export default connection