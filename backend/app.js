// Ajout des packages suplémentaires
const express = require('express');
const bodyParser = require ('body-parser');
const mongoose = require('mongoose');
const path = require('path');

// Création de l'application express
const app = express();

// Import des routes
const sauceRoutes = require('./routes/sauces');
const userRoutes = require('./routes/user');

// Connection a la Base de Donnée MongoDB
mongoose.connect('mongodb+srv://jess:35rennes35@clusterdejessica-bmvty.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

// Header pour contourner les erreurs de CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// Traduit la requête en format Json
app.use(bodyParser.json());

// Gestion de la ressource image en statique
app.use('/images', express.static(path.join(__dirname, 'images')));

// Routes attendues pour les differentes API
app.use('/api/sauces', sauceRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;