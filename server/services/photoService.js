const Photo = require("../models/Photo");

exports.create = (photoData) => Photo.create(photoData);

exports.getAllPhotos = () => Photo.find();

exports.getPhoto = (photoId) => Photo.findById(photoId).populate('author');

exports.editPhoto = (photoId, photoData) => Photo.updateOne({_id: photoId}, {$set: photoData}, {runValidators: true});