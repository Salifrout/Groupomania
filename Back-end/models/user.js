const Sequelize = require('sequelize');
const sequelize = require('../utils/database');
const correctEmail = new RegExp(/[a-z|1-9]{2,}[@][a-z]{2,}[\.][a-z]{2,3}/);
/*const correctEmail = new RegExp('^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$');*/

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
        /*validate: {isEmail: true, is: correctEmail},*/
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