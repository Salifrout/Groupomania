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
        required: true
    },
    comment_firstname: {
        type: Sequelize.STRING,
        required: true
    },
    comment_lastname: {
        required: true,
        type: Sequelize.STRING
    },
    related_postId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    comment_date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false,
        required: true
    },
});

module.exports = Comment;