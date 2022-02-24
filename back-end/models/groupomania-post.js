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
        required: true
    },
    Gpost_text: {
        type:Sequelize.TEXT,
        required: true
    },
    Gpost_media: {
        type: Sequelize.STRING
    },
    Gpost_firstNameAuthor: {
        required: true,
        type: Sequelize.STRING
    },
    Gpost_lastNameAuthor: {
        required: true,
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