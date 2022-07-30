require('dotenv-safe').config();
const express = require('express')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger/swagger_output.json');
const mongoose = require('./database/mongooseConnect')
const matchesRoutes = require('./routes/matchesRoutes')
const userRoutes = require('./routes/userRoutes')

const app = express()

app.use(express.json())
app.use(cors())
app.use('/minha-rota-de-documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile));
mongoose.connect()

app.use(matchesRoutes)
app.use(userRoutes)



module.exports = app