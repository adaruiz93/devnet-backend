const express = require('express')
const router = express.Router()
const Devnet = require('../models/devnet')


//get routes
//index
router.get('/', async (req,res) =>{
  res.send('hi')
})
module.exports = router