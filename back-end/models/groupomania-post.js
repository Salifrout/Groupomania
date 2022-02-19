const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const GroupomaniaPost = sequelize.define('Gpost', {
    Gpost_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    Gpost_title: {
        type: Sequelize.STRING(25),
        required: true
    },
    Gpost_text: {
        type:Sequelize.TEXT,
        required: true
    },
    Gpost_firstNameAuthor: {
        required: true,
        type: Sequelize.STRING(40)
    },
    Gpost_lastNameAuthor: {
        required: true,
        type: Sequelize.STRING(40)
    },
    Gpost_date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false,
        required: true
    } 
});

module.exports = GroupomaniaPost;