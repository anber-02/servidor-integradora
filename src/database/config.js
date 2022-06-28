require('dotenv').config()
// dotenv.config nos sirve para declarar las variables de entorno
// y con .gitignore ignoramos el archivo para mas segurdad a la hora de subir un
// archivo a git
console.log(process.env.DB_HOST)

const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
}

module.exports = config
