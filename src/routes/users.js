const express = require('express')
const router = express.Router()
// functions for crud users
const users = require('../controllers/users')

/**
 * @swagger
 * tags:
 *  name : Users
 *  description : Usuarios
 */

/**
 * @swagger
 * /user:
 *  get:
 *      summary: Obtener todos los usuarios
 *      tags: [Users]
 */
router.get('/userrr', users.getUsers)

/**
 * @swagger
 * /user:
 *  get:
 *      summary: Obtener la cantidad de los usuarios
 *      tags: [Users]
 */
router.get('/user/count', users.getUsersCount)

/**
 * @swagger
 * /user:
 *  get:
 *      summary: Obtener usuario por id
 *      tags: [Users]
 */
router.get('/user/:id', users.getUser)

/**
 * @swagger
 * /user:
 *  post:
 *      summary: Crear un usuario
 *      tags: [Users]
 */
router.post('/users', users.saveUser)

/**
 * @swagger
 * /user:
 *  delete:
 *   summary: Eliminar usuario por id
 *   tags: [Users]
 */
router.delete('/user/:id', users.deleteUser)

/**
 * @swagger
 * /user:
 *  put:
 *   summary: Actualizar datos usuario por id
 *   tags: [Users]
 */
router.put('/user/:id', users.updateUser)

module.exports = router
