const jwt = require('jsonwebtoken');
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

//lire le reste cours openclassrooms pour bien comprendre token + essayer try et catch dans login pour protection des routes après avoir supprimé auth et voir si protection marche + faire un sync force true après avoir restauré auth sur toutes les routes puis voir si fonction auth marchent ou pas