const express = require('express')
const  router = express.Router()

const User = require('../model/user.model')
router.post("/", async(req, res) =>{
    const user = await User.create(req.body)
 
    res.status(200).json(user)
})

module.exports =router