const mysql = require('mysql2/promise')
const config = require('./config')
console.log(config)

const connect = async () => {
  return await mysql.createConnection(config)
}
module.exports = connect

// const conexion = mysql.createConnection(config)
// conexion.connect((err, conn) => {
//     if (err) {
//         console.log(`Error en la conexion ${err}`);
//     }else{
//         console.log(`Conexion Correcta a la base de datos`)
//     }
// })

// module.exports = conexion;
