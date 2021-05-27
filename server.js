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