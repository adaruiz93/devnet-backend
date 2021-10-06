require('dotenv').config()
const mongoose = require('mongoose')
const DB_URL = process.env.DB_URL || 'mongodb://localhost/devnets'

// Error / Disconnect
mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'))
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))

// Connection string
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

mongoose.connect(DB_URL, options)
mongoose.connection.on('open', () => {console.log('connected to mongoose...')})
