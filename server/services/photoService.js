const Photo = require("../models/Photo");

async function create(photoData) {
    Photo.create(photoData);
}

module.exports = {
  create,
};
