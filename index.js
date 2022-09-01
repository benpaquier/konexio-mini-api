require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors(process.env.FRONTEND_URL))

app.get('/', (req, res) => {
  res.json({
    name: 'Spiderman',
    age: 99
  })
})

app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`)
})
