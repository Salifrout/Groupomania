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

/*
sequelize.query('INSERT INTO mysql.user (Host, User, Password) VALUES (\'%\', \'root\', \'GT664Grt\'');
sequelize.query('GRANT ALL ON *.* TO \'root\'@\'%\' WITH GRANT OPTION');
sequelize.query('FLUSH PRIVILEGES');*/

/*
const db = {};
db.Sequelize = Sequelize;
db.user = require('../models/user')(sequelize, Sequelize);
db.comment = require('../models/comment')(sequelize, Sequelize);
db.Gpost = require('../models/groupomania-post')(sequelize, Sequelize);

module.exports = db;
*/
console.log('database.js active !')
module.exports = sequelize;

//comme on peut le voir dans le fichier utils/.env, DB_USER correspond à l'utilisateur root. Dans un projet réel, il faudrait
//utiliser un autre utilisateur disposant uniquement provilèges accordant les fonctionnalités nécessaires pour faire fonctionner
// l'application pour éviter les risques liés à la sécurité au cas où un pirate tentait de corrompre le projet.