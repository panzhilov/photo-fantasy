const router = require('express').Router();

const { createPhoto, getPhotos } = require('../controllers/photoController');


router.post("/create", createPhoto);
router.get("/all-photos", getPhotos)

module.exports = router;