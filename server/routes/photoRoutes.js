const router = require('express').Router();

const { createPhoto } = require('../controllers/photoController');

router.post('/create', createPhoto)




module.exports = router;