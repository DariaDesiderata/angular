require('dotenv').congig();
const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const helmet = require('helmet')

//Route files
const product = require('./routes/product')

const PORT = process.env.PORT || 3000

//Middleware
app.use(helmet())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//routes
app.use('/product', product)

//listening PORT
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
})
