const express = require('express')
const app = express()
const api = require('./server/routes/api')

app.use(express.json())
app.use(express.urlencoded({extended:false}))

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/nasaDB', {useNewUrlParser: true})

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})

app.use('/', api)

const PORT = 3200
app.listen(PORT, ()=>{
    `server running on port ${PORT}`
})
