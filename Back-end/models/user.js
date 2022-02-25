const Sequelize = require('sequelize');
const sequelize = require('../utils/database');
const correctEmail = new RegExp('[a-z|1-9]{2,}[@][a-z]{2,}[\.][a-z]{2,3}');

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
        required: true,
        validate: {isEmail: true, is: correctEmail},
        unique: true
    },
    user_password: {
        type: Sequelize.STRING,
        required: true
    },
    user_firstname: {
        required: true,
        type: Sequelize.STRING
    },
    user_lastname: {
        required: true,
        type: Sequelize.STRING
    },
    user_admin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        required: true
    }
});

module.exports = User;