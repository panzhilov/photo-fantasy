const router = require("express").Router();

const {
  createPhoto,
  getPhotos,
  getPhoto,
  editPhoto,
} = require("../controllers/photoController");

router.post("/create", createPhoto);
router.get("/all-photos", getPhotos);
router.get("/:id", getPhoto);
router.post("/:photoId/edit", editPhoto)

module.exports = router;
