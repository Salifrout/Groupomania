const express = require('express');
const app = express();
const path = require('path'); 
const helmet = require('helmet'); //
const fs = require('fs');
const sequelize = require('./utils/database');
const userRoutes = require('./routes/user');
const commentRoutes = require('./routes/comment');
const GPostRoutes = require('./routes/post');
//les 3 const du haut st à charger dans les controllers
require('dotenv').config();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Content-Encoding, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

//si les images n'appraissent pas, mettre * pr les headers à la place de la longue liste

try {
    sequelize.authenticate();
    console.log('Connecté à la base de données MySQL !');
    sequelize.sync({force: true});
    //synchronise la BDD avec sequelize en créant les tables (supprime les tables si elles existent
    //déjà et les remplace par les nouvelles)
    if (sequelize.query('CREATE DATABASE if not exists ' + process.env.DB_NAME)) {
        sequelize.query('USE ' + process.env.DB_NAME);
    }
} catch (error) {
    console.error('Impossible de se connecter, erreur suivante:', error);
}

app.use('/media', express.static(path.join(__dirname, 'media')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(helmet());

//const routes = require(.../routes/...);
//app.use(/api/..., routes);
app.use('/api/user', userRoutes);
app.use('/api/post', GPostRoutes);
app.use('/api/comment', commentRoutes);

//et enregistré sur github !!

module.exports = app;

//npm install helmet