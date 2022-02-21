const jwt = require('jsonwebtoken');
const DB = require('../utils/database');
require('dotenv').config();

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decodedToken.userId;
    req.auth = { userId };  
    
    if (req.body.userId && req.body.userId !== userId) {
      throw 'Unauthorized request !';
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};