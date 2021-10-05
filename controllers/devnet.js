const express = require('express')
const router = express.Router()
const Devnet = require('../models/devnet')


//get routes
//INDEX
router.get('/', async (req,res) =>{
  try{
    const allDevs = await Devnet.find()
    res.status(200).json(allDevs)
  } catch(err) {
    res.status(400).json({ error: err.message })
  }
})

//SHOW
router.get('/:id', async (req, res) => {
  try {
    const findDev = await Devnet.findById(req.params.id)
    res.status(200).json(findDev)
  } catch(err) {
    res.status(400).json({ error: err.message })
  }
})

//CREATE / POST
router.post('/', async (req, res) => {
  try{
    const newDev = await Devnet.create(req.body)
    res.status(200).json(newDev)
  } catch(err) {
    res.status(400).json({ error: err.message })
  }
})

//DELETE
router.delete('/:id', async (req, res) => {
  try {
    const deleteDev = await Devnet.findByIdAndDelete(req.params.id)
    res.status(200).json(deleteDev)
  } catch(err) {
    res.status(400).json({ error: err.message })
  }
})

//UPDATE
router.put('/:id', async (req, res) => {
  try {
    const updateDev = await Devnet.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updateDev)
  } catch(err) {
    res.status(400).json({ error: err.message })
  }
})


module.exports = router
