const express = require('express')
const router = express.Router()
const {Registers} = require('../models')


router.get('/', async (req,res) =>{
        const GetAllRegisters = await Registers.findAll()
        res.status(200).json(GetAllRegisters)
})

router.post('/', async (req,res) =>{
    const PostRegister = req.body
    await Registers.create(PostRegister)
    res.status(200).json(PostRegister)
})

router.put("/:id", async (req,res) =>{

        const {id} = req.params;
        const updatedData = req.body
        const register = await Registers.findByPk(id)
    
        if(!register){
            return res.status(404).json({error: "Register not found"})
        }

        await register.update(updatedData);
        res.status(200).json(register)

})

router.delete('/:id', async (req,res) =>{
    const {id} = req.params
    const DeleteRegister = await Registers.findByPk(id)


    if (!DeleteRegister) {
        return res.status(404).json({ error: 'Register not found' });
    }

    await DeleteRegister.destroy()
    res.status(200).json({message: "Registro deleted"})
})

module.exports = router