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
    sequelize.authenticate()
        .then(() => {
            console.log('cest bien');
        })
        .catch(err => {
            console.error('cest mal: ' + err);
        });
    console.log('Connecté à la base de données MySQL 1!');
    sequelize.sync({force: true});
    console.log('Connecté à la base de données MySQL 3!');
    //synchronise la BDD avec sequelize en créant les tables (supprime les tables si elles existent
    //déjà et les remplace par les nouvelles)
} catch (error) {
    console.error('Impossible de se connecter, erreur suivante:', error);
}

/*function connect_toDB() {
    console.log('database1');
    sequelize.query('INSERT INTO mysql.user (Host, User, Password) VALUES (\'%\', \'root\', \'GT664Grt\'');
    sequelize.query('GRANT ALL ON *.* TO \'root\'@\'%\' WITH GRANT OPTION');
    sequelize.query('FLUSH PRIVILEGES');
    console.log('database2');
    sequelize.authenticate()
    .then(() => {
        console.log('database3');
        sequelize.query('INSERT INTO mysql.user (Host, User, Password) VALUES (\'%\', \'root\', \'GT664Grt\'');
        sequelize.query('GRANT ALL ON *.* TO \'root\'@\'%\' WITH GRANT OPTION');
        console.log(USER + mysql.user);
        console.log('database4');
        /*sequelize.query('RENAME USER \'root\'@\'localhost\' TO \'root\'@\'%\' FROM mysql.user');
        
    })
    .then(() => {
        console.log('Connecté à la base de données MySQL !');
        sequelize.sync({force: true});
    })
    .catch (error => {
        console.error('Impossible de se connecter, erreur suivante:', error);
        console.log('database6');
        setTimeout(connect_toDB, 5000);
    })
};

connect_toDB();*/

//copier le code de l'autre ordi

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