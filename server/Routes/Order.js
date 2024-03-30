const express = require('express')
const router = express.Router()
const { Order } = require('../models')



router.post('/', async (req,res) =>{
    const order = req.body
    const CreateOrder = await Order.create(order)
    res.json(CreateOrder).status(200)
})

router.get('/', async (req,res) =>{
    const GetOrders = await Order.findAll()
    res.status(201).json(GetOrders)
})
 




module.exports = router