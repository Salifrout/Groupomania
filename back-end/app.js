const express = require('express');
const app = express();
const helmet = require('helmet');
const sequelize = require('./utils/database');
const userRoutes = require('./routes/user');
const commentRoutes = require('./routes/comment');
const GPostRoutes = require('./routes/groupomania-post');
//les 3 const du haut st à charger dans les controllers
require('dotenv').config();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

sequelize.sync({force: true});
//synchronise la BDD avec sequelize en créant les tables (supprime les tables si elles existent
//déjà et les remplace par les nouvelles)

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(helmet());

//const routes = require(.../routes/...);
//app.use(/api/..., routes);
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/post', GPostRoutes);
app.use('/api/comment', commentRoutes);

//et enregistré sur github !!

module.exports = app;

//npm install helmet