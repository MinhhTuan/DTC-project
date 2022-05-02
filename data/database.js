const mysql = require('mysql')
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'dtc'
})

// connection.connect(function(err) {
//   if (err) {
//     return console.error('error: ' + err.message);
//   }

//   console.log('Connected to the MySQL server.');
// });

module.exports = connection