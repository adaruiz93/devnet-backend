const mongoose = require('mongoose')

const devnetSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  company: {
    type: String
  },
  questionType: {
    type: String
  },
  question: {
    type: String
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
}, {timestamp: true})

module.exports = mongoose.model('Devnet', devnetSchema)