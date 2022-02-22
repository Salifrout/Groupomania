const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'process.env.DB_NAME',
    'process.env.DB_USER',
    'process.env.DB_PASSWORD', {
        dialect: 'mysql',
        host: 'process.env.DB_HOST',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
);

const db = {};
db.Sequelize = Sequelize;
db.user = require('../models/user')(sequelize, Sequelize);
db.comment = require('../models/comment')(sequelize, Sequelize);
db.Gpost = require('../models/groupomania-post')(sequelize, Sequelize);

module.exports = db;

//comme on peut le voir dans le fichier utils/.env, DB_USER correspond à l'utilisateur root. Dans un projet réel, il faudrait
//utiliser un autre utilisateur disposant uniquement provilèges accordant les fonctionnalités nécessaires pour faire fonctionner
// l'application pour éviter les risques liés à la sécurité au cas où un pirate tentait de corrompre le projet.