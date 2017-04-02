require('dotenv').config();
const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const cors = require('cors')
const PORT = process.env.PORT || 3000

//Route files
const farm = require('./routes/farms')
const category = require('./routes/foodcategories')
const product = require('./routes/products')
const review = require('./routes/reviews')
const user = require('./routes/users')

//Middleware
app.use(helmet())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//routes
app.use('/farm', farm)
app.use('/category', category)
app.use('/product', product)
app.use('/review', review)
app.use('/user', user)

//listening PORT
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
})

module.exports = app
