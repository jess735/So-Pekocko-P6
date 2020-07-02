// Ajout des packages suplémentaires
const express = require('express'); /* Framework : création et gestion des serveurs Node */
const bodyParser = require ('body-parser'); /* traduit les requêtes post en JSON */
const mongoose = require('mongoose'); /* plugin de la base de donnée MONGODB */
const path = require('path'); /*  */
const helmet = require('helmet'); /* Importation d'helmet, pour les failles xss  */


// Création de l'application express
const app = express();

// Import des routes
const sauceRoutes = require('./routes/sauces');
const userRoutes = require('./routes/user');

// Connection a la Base de Donnée MongoDB
//& masquage des données grâce à DOTENV package.
require("dotenv").config();
const ID = process.env.ID;
const MDP = process.env.MDP;

mongoose.connect(`mongodb+srv://${ID}:${MDP}@clusterdejessica-bmvty.mongodb.net/test?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

// Header pour contourner les erreurs de CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.removeHeader('X-Powered-By'); //suppression du header pour les failles xss
  next();
});

// Utilisation d'helmet
app.use(helmet());


// Rend les données du corps de la requête exploitable en format JSON
app.use(bodyParser.json());

// Gestion de la ressource image en statique
app.use('/images', express.static(path.join(__dirname, 'images')));

// Routes attendues pour les differentes API
app.use('/api/sauces', sauceRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;