const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
    data: Array,
    links: Array
})

const Image = mongoose.model("Image", imageSchema)
module.exports = Image
