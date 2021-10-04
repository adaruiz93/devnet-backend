const express = require('express')
const router = express.Router()
const Devnet = require('../models/devnet')


//get routes
//index
router.get('/', async (req,res) =>{
  try{
    const allDevs = await Devnet.find()
    res.status(200).json(allDevs)
  } catch(err) {
    res.status(400).json({ error: err.message })
  }
})
module.exports = router
