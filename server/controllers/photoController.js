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
    const photos = await photoService.getAll();
}

async function getPhoto(req, res){
    try {
        const photo = await photoService.getOne(req.params.photoId)

        if(photo){
            res.status(200).json({ message: "Photo fetched!", photo });
        }
    } catch (err) {
        console.error("getPhoto - Database error: ", err.message);
    }
}

async function editPhoto(req, res){
   
    try {
        await photoService.edit(req.params.photoId, req.body);
        res.status(200).json({ message: "Photo edited!" });
    } catch (err) {
        console.error("editPhoto - Database error: ", err.message);
    }
}

async function deletePhoto(req, res){
    try {
        await photoService.deleteOne(req.params.photoId)
        res.status(200).json({message: "The photo is deleted"})
    } catch (error) {
        console.error("deletePhoto - Database error: ", err.message);
    }
}



module.exports = {
    createPhoto,
    getPhotos,
    getPhoto,
    editPhoto,
    deletePhoto
}