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

module.exports = {
  createAccount: function(name, email, password) {
    var queryStr = ``
    connection.query(queryStr, (err, res) => {
      if (err) {
        console.log(err)
      } else {
        console.log('successfully called Databse.createAccount')
      }
    })
  }

}