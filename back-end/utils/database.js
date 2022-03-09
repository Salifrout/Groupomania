const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    'groupomania',
    'root',
    'BT664Grt', {
        dialect: 'mysql',
        host: 'localhost',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
);

module.exports = sequelize;

//Ici, l'utilisateur est le user 'root'. Dans un projet réel, il faudrait utiliser un autre utilisateur disposant
//uniquement de privilèges accordant les fonctionnalités nécessaires pour faire fonctionner l'application pour
//éviter les risques liés à la sécurité au cas où un pirate tenterait de corrompre le projet.