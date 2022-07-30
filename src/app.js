require('dotenv-safe').config();
const express = require('express')
const cors = require('cors')
const mongoose = require('./database/mongooseConnect')
const matchesRoutes = require('./routes/matchesRoutes')
const userRoutes = require('./routes/userRoutes')

const app = express()

app.use(express.json())
app.use(cors())
mongoose.connect()

app.use(matchesRoutes)
app.use(userRoutes)

module.exports = app