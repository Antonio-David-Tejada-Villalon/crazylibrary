const verifyLogin = (req, res, next) => {
    if(!req.oidc.isAuthenticated()) {
        res.status(401).send(
            {"message": "You are not login",
            "login" : "Copy and paste this link on your URL bar: https://antonio-david-tejada-villalon-l09-13.onrender.com/login and press enter"}
        );
    }
    next();
}

module.exports = {verifyLogin};