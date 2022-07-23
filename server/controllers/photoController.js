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
async function getPhoto(req, res){
    try {
        const photo = await photoService.getPhoto(req.params.id)

        if(photo){
            res.status(200).json({ message: "Photo fetched!", photo });
        }
    } catch (err) {
        console.error("getPhoto - Database error: ", err.message);
    }
}


module.exports = {
    createPhoto,
    getPhotos,
    getPhoto,
}