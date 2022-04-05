const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const Comment = sequelize.define('comment', {
    comment_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    comment_text: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    comment_firstname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    comment_lastname: {
        allowNull: false,
        type: Sequelize.STRING
    },
    related_userEmail: {
        type: Sequelize.STRING,
        allowNull: false
    },
    related_postId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    comment_date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false,
        required: true
    },
});

module.exports = Comment;