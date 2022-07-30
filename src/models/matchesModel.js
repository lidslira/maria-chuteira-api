const mongoose = require('mongoose')

const matchSchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId
  },
 
  name: {
    type: String, 
    required: true, 
    unique: true,
  },

  team: String,

  address: {
    type: String,
    required: true
  },

  numTeams: {
    type: Number,
    required: true
  },

  date: {
    type: String,
    default: 'Not informed.'
  },
  
  hour: {
    type: String,
    required: true
  }

}, { timestamps: true })

const Model = mongoose.model('match', matchSchema)

module.exports = Model