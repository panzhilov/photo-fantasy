const photoService = require('../services/photoService');

async function createPhoto(req, res){
   const photoData = {...req.body, author: req.user,_id};

    try {
      await photoService.create(photoData)
    } catch (error) {
        throw new Error('Please send correct data')
    }
}

module.exports = {
    createPhoto
}