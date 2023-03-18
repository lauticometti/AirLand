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
app.use('/sneakers', require('./routes/sneakersRoutes'))
app.use('/users', require('./routes/usersRoutes'))
app.use('/filter', require('./routes/filtersRoutes'))

app.use(express.static(path.join(__dirname, 'public')))

module.exports = app
