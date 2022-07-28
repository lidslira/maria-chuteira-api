const app = require('./src/app')
require('dotenv-safe').config()

app.listen(8000, () => console.log(`fé no pai que agora vai, porta: ${process.env.PORT}`))
