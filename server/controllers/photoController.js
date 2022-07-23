const photoService = require('../services/photoService');

async function createPhoto(req, res){
    const photoData = {...req.body, author: req.user._id};
    
    try {
        await photoService.create(photoData);
        res.status(200).json({ message: "You create photo successfully!" });
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: err.message });
    } 
}

async function getPhotos(req, res){
    const photos = await photoService.getAllPhotos();
}

module.exports = {
    createPhoto,
    getPhotos
}