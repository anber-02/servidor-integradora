const connect = require('../database/database')
console.log(connect)

exports.getUsers = async (req, res, next) => {
  console.log('get all users')
  const connection = await connect()
  const [rows] = await connection.query('SELECT * FROM usuarios')
  // conexion.query('SELECT * FROM usuarios', function (err, result) {
  //     if (err) {
  //         throw err;
  //     } else{
  //         return res.send(result);
  //     }
  //     });
  res.send(rows)
}

exports.getUser = async (req, res, next) => {
  const connection = await connect()
  const [rows] = await connection.query('CALL showUsuarios2(?)', [req.params.id])

  res.json(rows)

  console.log(req.params.id)
  console.log('getUser for id')
}

exports.getUsersCount = async (req, res, next) => {
  const connection = await connect()
  const [rows] = await connection.query('SELECT COUNT(*) FROM usuarios')
  console.log(rows)
  console.log('get users conut, all users')
  res.json(rows[0]['COUNT(*)'])
}

exports.saveUser = async (req, res, next) => {
  const conexion = await connect()
  const [results] = await conexion.query('INSERT INTO usuarios(usuario, contrasennia, nombre, apellido_p, apellido_m, email, num_telefono, edad) VALUES(?,?,?,?,?,?,?,?)', [
    req.body.usuario,
    req.body.contrasennia,
    req.body.nombre,
    req.body.apellido_p,
    req.body.apellido_m,
    req.body.email,
    req.body.num_telefono,
    req.body.edad
  ])
  res.json({ id: results.insertId, ...req.body })
  console.log('createUser nene')
}

exports.deleteUser = async (req, res, next) => {
  const connection = await connect()
  const [results] = await connection.query('DELETE FROM usuarios WHERE idusuario = ?', [req.params.id])

  console.log(results)
  res.sendStatus(204)
  console.log('deleteUser for id')
}

exports.updateUser = async (req, res, next) => {
  const connection = await connect()
  await connection.query('UPDATE usuarios SET ? WHERE idusuario = ?',
    [req.body, req.params.id])

  res.sendStatus(204)
  console.log('updateUser with one object an id')
}
