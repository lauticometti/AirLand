const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')

require('dotenv').config()

// Server create
const app = express()

// middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

// Routes
app.use('/api/sneakers', require('./routes/sneakersRoutes'))
app.use('/api/users', require('./routes/usersRoutes'))
app.use('/api/filter', require('./routes/filterRoutes'))
app.use('/api/cart', require('./routes/shoppingCartRoutes'))
app.use('/api/payment', require('./routes/paymentRoutes'))
app.use('/api/order', require('./routes/ordersRoutes'))
app.use('/api/email', require('./routes/emailRoutes'))

app.use(express.static(path.join(__dirname, 'public')))

module.exports = app
