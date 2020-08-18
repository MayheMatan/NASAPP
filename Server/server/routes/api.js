const express = require('express');
const router = express.Router()
const Image = require('../model/Image');

router.get("/images", (req, res) => {
    Image.find({}).then(images => res.send(images))
});

router.get("/image/:id", (req, res) => {
    const { id } = req.params;
    Image.findById(id).then(results => res.send(results))
})

router.post("/image", (req, res) => {
    const image = new Image(req.body);
    image.save().then(newImage => res.send(newImage));
})

router.delete("/image/:id", (req, res) => {
    const { id } = req.params
    Image.findByIdAndDelete(id).then(result => res.end());
})

module.exports = router;
