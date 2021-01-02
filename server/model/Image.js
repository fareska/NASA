const mongoose = require('mongoose')
const Schema = mongoose.Schema

const imageSchema = new Schema({
    title: String,
    imgUrl: String,
    description: String,
})
const Image = mongoose.model('Image', imageSchema)

module.exports = Image
