const app = require('./app')
// const data = require('./database/database');

// data()
// const host = '192.168.56.1'
const port = 3002
app.listen(port, function () {
  console.log('Server on port ' + port)
})
