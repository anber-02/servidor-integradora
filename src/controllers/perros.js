const connect = require('../database/database')
console.log(connect)

exports.getPerros = async (req, res, next) => {
  console.log('get all perros')
  const connection = await connect()
  const [rows] = await connection.query('SELECT * FROM perros')
  res.send(rows)
}

exports.getPerro = async (req, res, next) => {
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

exports.savePerro = async (req, res, next) => {
  const conexion = await connect()
  const [results] = await conexion.query('INSERT INTO perros(color, tamannio, raza, senias_particulares,usuarios_idusuarios) VALUES(?,?,?,?,?)', [
    req.body.color,
    req.body.tamannio,
    req.body.raza,
    req.body.senias_particulares,
    req.body.usuarios_idusuarios
  ])
  res.json({ id: results.insertId, ...req.body })
  console.log('createPerro guagua')
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
