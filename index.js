const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.json('Welcome to Mini Api')
})

app.listen(port, () => {
  console.log(`Server running on ${port}`)
})
