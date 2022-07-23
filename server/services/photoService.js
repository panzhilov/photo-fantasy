const Photo = require("../models/Photo");

exports.create = (photoData) => Photo.create(photoData);

exports.getAllPhotos = () => Photo.find();