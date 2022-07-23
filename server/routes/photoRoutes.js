const router = require("express").Router();

const {
  createPhoto,
  getPhotos,
  getPhoto,
} = require("../controllers/photoController");

router.post("/create", createPhoto);
router.get("/all-photos", getPhotos);
router.get("/:id", getPhoto);

module.exports = router;
