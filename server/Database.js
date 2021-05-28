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
  createAccount: function(name, email, password, callback) {
    console.log('createAccount called!')
    var queryStr = `INSERT INTO users (name, email, password) VALUES ('${name}','${email}','${password}')`
    connection.query(queryStr, (err, res) => {
      if (err) {
        console.log(err)
        callback(err, null)
      } else {
        console.log('successfully called Database.createAccount')
        callback(null, res)
      }
    })
  }

} //end of module.exports