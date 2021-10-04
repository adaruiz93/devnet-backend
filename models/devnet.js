const mongoose = require('mongoose')

const devnetSchema = new mongoose.Schema({
  role:{ 
    type: String,
    required: true
  },
  company: {
    type: String,
  },
  questionType: {
    type: String,
    required: true
  },
  question: {
    type: String,
    required: true
  },
  details: {
    type: String
  },
  solution: {
    type: String
  },
  tags: {
    type: [String]
  }
  
}, {timestamps: true})


module.exports = mongoose.model('Devnet', devnetSchema)