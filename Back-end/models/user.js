const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const User = sequelize.define('user', {
    user_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    user_email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    user_password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    user_firstname: {
        allowNull: false,
        type: Sequelize.STRING
    },
    user_lastname: {
        allowNull: false,
        type: Sequelize.STRING
    },
    user_admin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        required: true
    }
});

module.exports = User;