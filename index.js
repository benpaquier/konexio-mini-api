require('dotenv').config()
const express = require('express')
const app = express()

const port = app.get('/', (req, res) => {
  res.json('Welcome to Mini Api')
})

console.log(process.env)

app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`)
})
