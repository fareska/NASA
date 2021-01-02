const express = require('express')
const router = express.Router()
const axios = require('axios')

const Image = require('../model/Image.js')

// This route should also check for an optional parameter (the image's id) and be able to search for that specific image, if an id was passed
router.get('/images/:id?', function (req, res) {
    const { id } = req.params
    if (id) {
        Image.findById(id).exec(function(err, data){
            console.log(data, 'pleaaaas');
            res.send(data)
        })
    }
    else Image.find({}, (err, data) => res.send(data))
})

router.post('/image', async function (req, res) {
    let newImage = new Image(req.body)
    const saved = await newImage.save()
    res.send(saved)
})

router.delete('/image/:id', async function (req, res) {
    const img = await Image.findByIdAndDelete(req.params.id)
    res.send(img)
})

module.exports = router