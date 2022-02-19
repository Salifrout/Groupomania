const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'groupomania',
    'root',
    'BT664Grt', {
        dialect: 'mysql',
        host: 'localhost'
    }
);

module.exports = sequelize;