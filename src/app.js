require('dotenv-safe').config();
const express = require('express')
//const cors = require('cors')
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger/swagger_output.json');
const mongoose = require('./database/mongooseConnect')
const index = require('../src/routes/index.js');
const matchesRoutes = require('./routes/matchesRoutes')
const userRoutes = require('./routes/userRoutes')

const app = express()
app.use(express.json())
//app.use(cors())

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
});

app.use('/mariachuteira-documentation', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use('/', index);
app.use(matchesRoutes)
app.use(userRoutes)

mongoose.connect()

module.exports = app