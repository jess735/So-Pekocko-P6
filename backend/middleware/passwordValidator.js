const passwordValidator = require('password-validator');

// Création du schéma
let passwordSchema = new passwordValidator();

// Ajout des propriétés au schéma de mot de passe
passwordSchema
.is().min(6) // Minimum 8 caractères
.is().max(20) // Maximum 20 caractères
.has().uppercase() // Doit contenir au moins 1 majuscule
.has().lowercase() // Doit contenir au moins 1 minuscule
.has().digits() // Doit contenir au moins 1 chiffre


module.exports = passwordSchema;