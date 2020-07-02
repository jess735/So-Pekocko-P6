// Ajout des packages suplémentaires
const mongoose = require('mongoose');
const validate = require('../middleware/inputValidator');

// Modèle des sauces
const sauceSchema = mongoose.Schema({
  userId: {type: String, required: true},
  name: {type: String, required: true, validate: validate.nameValidator},
  manufacturer: {type: String, required: true, validate: validate.manufacturerValidator},
  description: {type: String, required: true, validate: validate.descriptionValidator},
  mainPepper: {type: String, required: true, validate: validate.mainPepperValidator},
  imageUrl: {type: String, required: true},
  heat: {type: Number, required: true},
  likes: {type: Number, required: false, default:0},
  dislikes: {type: Number, required: false, default:0},
  usersLiked: {type: [String], required: false},
  usersDisliked: {type: [String], required: false},
});

// exportation dans MONGODB du Schéma de donnée
module.exports = mongoose.model('Sauce', sauceSchema);