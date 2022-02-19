const express = require('express');
const app = express();
const helmet = require('helmet');
const sequelize = require('./utils/database');
const User = require('./models/user');
const Comment = require('./models/comment');
const GPost = require('./models/groupomania-post');
//les 3 const du haut st à charger dans les controllers
require('dotenv').config();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

sequelize.sync({force: true});
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//const routes = require(.../routes/...);
//app.use(/api/..., routes);
app.use('/api/user', );
app.use('/api/post')
//et enregistré sur github !!

module.exports = app;

//npm install helmet