const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'aaa123',
  database: 'hortar'
})

connection.connect()

module.exports = connection

// connection.query('select * from planta', (error, results, fields) => {
//   if(error) throw error;
//   console.log('the name is: ', results[0].name)
//   console.log(fields)
// })

// connection.end()