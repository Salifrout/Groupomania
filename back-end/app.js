const express = require('express');
const app = express();
const helmet = require('helmet');
const sequelize = require('./utils/database');
const userRoutes = require('./routes/user');
const commentRoutes = require('./routes/comment');
const GPostRoutes = require('./routes/post');
require('dotenv').config();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Content-Encoding, Authorization');
    /*res.setHeader('Access-Control-Allow-Headers', '*');*/
    /*res.setHeader('Access-Control-Allow-Credentials', 'true');*/
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

try {
    sequelize.authenticate()
        .then(() => {
            console.log('Connecté à la base de données MySQL !');
        })
        .then(() => {
            sequelize.sync(/*{force: true}*/);
            console.log('Synchronisation effectuée !');
            //synchronise la BDD avec sequelize en créant les tables (supprime les tables si elles existent
            //déjà et les remplace par les nouvelles)
        })
        .catch(err => {
            console.error(err);
        });
} catch (error) {
    console.error('Impossible de se connecter, erreur suivante: ', error);
}

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(helmet());

app.use('/api/user', userRoutes);
app.use('/api/post', GPostRoutes);
app.use('/api/comment', commentRoutes);

module.exports = app;

//je peux rejoindre le forum meme si l'email que je donne dans login.vue ne correspond à aucun email enregistré dans la BDD (ex; syc, force: true)