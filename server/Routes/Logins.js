const express = require('express')
const router = express.Router()
const {Logins} = require('../models')

router.post('/', async (req,res) =>{
    const PostLogins = req.body
    await Logins.create(PostLogins)
    res.status(200).json(PostLogins)
})

module.exports = Logins