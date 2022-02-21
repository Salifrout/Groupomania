module.exports = (req, res, next) => {
    const Email = (email) => {
        const TestForEmail = new RegExp(/[a-z|1-9]{2,}[@][a-z]{2,}[\.][a-z]{2,3}/);
        const Valid_Email = TestForEmail.test(email);
        Valid_Email ? next() : res.status(400).json({ message: "L'email n'est pas valide."});
    }
    Email(req.body.email)
};