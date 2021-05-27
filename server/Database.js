const mysql = require('mysql');
// const db = require('schema.sql');


var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'multiCheckout'
})

connection.connect((err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log('mySql loaded successfully!')
  }
});

