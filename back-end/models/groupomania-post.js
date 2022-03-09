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
        type: Sequelize.STRING,
        allowNull: false
    },
    Gpost_text: {
        type:Sequelize.TEXT,
    },
    Gpost_media: {
        type: Sequelize.STRING
    },
    Gpost_firstNameAuthor: {
        allowNull: false,
        type: Sequelize.STRING
    },
    Gpost_lastNameAuthor: {
        allowNull: false,
        type: Sequelize.STRING
    },
    Gpost_date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false,
        required: true
    } 
});

module.exports = GroupomaniaPost;