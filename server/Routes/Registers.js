const express = require('express')
const router = express.Router()
const {Registers} = require('../models')

router.get('/', async (req,res) =>{
    try{
        const GetAllRegisters = await Registers.findAll()
        res.status(200).json(GetAllRegisters)
    }catch(error){
        res.status(500).send({error: "Erro ao obter dados"})
    }
})

router.post('/', async (req,res) =>{
    const PostRegister = req.body 
    await Registers.create(PostRegister)
    res.json(PostRegister)
})