const mongoose = require('mongoose')

const connect = async() => {
   try {
     await mongoose.connect(process.env.DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
     })
     console.log('ihuuuuu, banco conectado! ')
   } catch (error) {
    console.error(error)
   }
}

module.exports = {
  connect
}