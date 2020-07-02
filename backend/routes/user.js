// Ajout des packages suplémentaires
const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

// Middleware => Bruteforce
const protect = require('../middleware/bruteforce');

// Toutes les toutes des API
router.post('/signup', userCtrl.signup);
router.post('/login',protect, userCtrl.login);

module.exports = router;