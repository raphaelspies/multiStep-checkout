const express = require('express');
const app = express();
const port = 3000;
const Database = require('./server/Database.js')

app.use(express.static('public')) //path.join?

app.listen(port, () => {
  console.log(`Express listening on port ${port}`)
})

// app.get('/', (req, res) => {
//   res.send('hello, world from Express!')
// })

app.post('/', (req, res) => {
  res.send('POST')
})

app.put('/', (req, res) => {
  res.send('PUT')
})

app.delete('/', (req, res) => {
  res.send('DELETE')
})

//submit createAccount
app.post('/account/:name/:email/:password', (req, res) => {
  var name = req.params.name;
  var email = req.params.email;
  var password = req.params.password;
  Database.createAccount(name, email, password, (err, res)=> {
    if (err) {
      console.log(err)
    } else {
      console.log('successfully posted new user') //shows on server
    }
  })
      res.send('success!') //sent back to client
})
// , (req, res) => {  res.send('posted new user')
  // res.send(`posted new user: ${name}, email: ${email}, password: ${password}!`)
// })
