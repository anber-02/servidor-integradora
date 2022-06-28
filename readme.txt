//modulos necesarios dependencias de produccion
npm install express mysql morgan

express -> rutas
mysql -> conexion a base de datos
morgan -> permite ver las peticiones que van llegando por la consola 
cors -> permite origenes que pueden conectarse al backend
dotenv -> crear variables de entorno

//modulos de documentacion
swagger-jsdoc
swagger-ui-express

//fin de las dependencias de produccion


//dependencias de desarrollo
npm install nodemon -D
nodemon -> reinicia el servidor cada que exista un cambio
//uso de babel para la conversion de js moderno a antiguo

@bable/core -> transpilador convertidor de codigo
@babel/cli -> consola de babel
@babel/preset-env -> puglin 
@babel/node -> indicamos que ejecute todo mediante node


//creamos el archivo de configuracion de babel
llamado .babelrc donde especificamos lo siguiente
{
    "presets": [
        "@babel/preset-env"
    ]
}
// archivo de configuracion que especifica "question"
// va a realizar babel

//de ahi solo configuramos nodemon en el 
package.json y empezamos a codificar
por si quieren se puede descargar 
el linter Eslint para mejorar
la visibilidad


--CARPETAS--
controllers -> definicion de funciones
que van a utilizarse al visitar URLS

router -> definir urls a utilizar


npm run lint -- --fix arrega el eslint