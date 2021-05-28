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
  },

  createAddress: function(address1, address2, city, state, zip, callback) {
    console.log('createAddress called!')
    var queryStr = `INSERT INTO address (address1, address2, city, state, zip) VALUES ('${address1}','${address2}','${city}','${state}',${zip})`
    connection.query(queryStr, (err, res) => {
      if (err) {
        console.log(err)
        callback(err, null)
      } else {
        console.log('successfully called Database.createAddress')
        callback(null, res)
      }
    })
  },

  createPayment: function(ccNo, expiry, cvv, billingZip, callback) {
    console.log('createPayment called!')
    var queryStr = `INSERT INTO paymentInfo (ccNo, ccExpiry, cvv, billingZip) VALUES (${ccNo}, ${expiry}, ${cvv}, ${billingZip})`
    connection.query(queryStr, (err, res) => {
      if (err) {
        console.log(err)
        callback(err, null)
      } else {
        console.log('successfully called Database.createPayment')
        callback(null, res)
      }
    })
  }

} //end of module.exports