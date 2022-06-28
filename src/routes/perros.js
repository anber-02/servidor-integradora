const express = require('express')
const router = express.Router()
// functions for crud users
const perros = require('../controllers/perros')
const multer = require('multer')
const path = require('path')
const connect = require('../database/database')
const fs = require('fs')

const diskStorage = multer.diskStorage({
  destination: path.join(__dirname, '../images'),
  filename: (req, file, callback) => {
    callback(null, Date.now() + file.originalname)
  }
})
// midleware
const fileUpload = multer({
  storage: diskStorage
}).single('image')

router.get('/perros', perros.getPerros)

router.post('/perros/img', fileUpload, async (req, res) => {
  const tipo = req.file.mimetype
  const nombre = req.file.originalname
  const data = fs.readFileSync(path.join(__dirname, '../images/' + req.file.filename))
  const connection = await connect()
  const [results] = await connection.query('INSERT INTO perros2(img, nombre, tipo) VALUES(?,?,?)', [data, nombre, tipo])
  res.send(results)
  console.log(req.file)
  res.send('image guardada')
})

module.exports = router
