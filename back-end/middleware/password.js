const passwordValidator = require('password-validator');
const passwordSchema = new passwordValidator();

passwordSchema
.is().min(12)                                    
.is().max(30)                                  
.has().uppercase()                              
.has().lowercase()                              
.has().digits()                                
.has().not().spaces()                           

module.exports = (req, res, next) => {
    if (passwordSchema.validate(req.body.password)) {
        next();
    } else {
        return res.status(400).json({error: "Un mot de passe plus sécurisé est nécessaire: "+ passwordSchema.validate('req.body.password', { details: true })})
    }
}
