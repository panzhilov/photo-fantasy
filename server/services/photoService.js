const Photo = require("../models/Photo");

exports.create = (photoData) => Photo.create(photoData);

exports.getAll = () => Photo.find();

exports.getOne = (photoId) => Photo.findById({_id: photoId}).populate('author');

exports.edit = (photoId, photoData) => Photo.updateOne({_id: photoId}, {$set: photoData}, {runValidators: true});

exports.deleteOne = (photoId) => Photo.deleteOne({_id: photoId});