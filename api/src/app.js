const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')

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
app.use('/api/filter', require('./routes/filtersRoutes'))
app.use('/api/cart', require('./routes/shoppingCartRoutes'))

app.use(express.static(path.join(__dirname, 'public')))

module.exports = app
