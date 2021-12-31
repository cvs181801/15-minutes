const express = require('express')
const app = express()
const path = require('path')
const port = 3001

app.use('/', express.static(path.join(__dirname, "client")));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + 'client/build/index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening at hhttps://runkit.com/embed/savettp://localhost:${port}`)
})