const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')
const options = require('../swaggerOptions')

const specs = swaggerJSDoc(options)

const usersRoutes = require('./routes/users')
const perrosRoutes = require('./routes/perros')

const app = express()

app.use(cors())
app.use(morgan('dev'))// permite ver las solicitudes desde la consola

app.use(express.json())

app.use(usersRoutes)
app.use(perrosRoutes)

app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs))

module.exports = app
