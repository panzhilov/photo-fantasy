const router = require("express").Router();

const {
  createPhoto,
  getPhotos,
  getPhoto,
  editPhoto,
  deletePhoto,
} = require("../controllers/photoController");

router.post("/create", createPhoto);
router.get("/all-photos", getPhotos);
router.get("/:photoId", getPhoto);
router.post("/:photoId/edit", editPhoto)
router.get('/:photoId/delete', deletePhoto)

module.exports = router;
