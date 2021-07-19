const express = require('express')

const app = express()
app.use(express.json())

const mongoose = require('mongoose')

const userController = require('./controller/user.controller')

app.use("/user",userController)

const connect = ()=>{
    return mongoose.connect("mongodb://127.0.0.1:27017/users",{
        useCreateIndex:true,
        useFindAndModify:false,
        useNewUrlParser:true,
        useUnifiedTopology: true,
    })
}









app.listen(7777,async(req, res) => {
    await connect()
    console.log("Listening on port 7777")
})