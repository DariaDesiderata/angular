require('dotenv').config();
const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const PORT = process.env.PORT || 3000

//Route files
const farm = require('./routes/farm')
const category = require('./routes/category')
const product = require('./routes/product')

//Middleware
app.use(helmet())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//routes
app.use('/farm', farm)
app.use('/category', category)
app.use('/product', product)

//listening PORT
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
})
