const jwt = require('jsonwebtoken');
const config = require('config');

const tokenSecret = config.get("jwt.tokenSecret");

const authorizeUser = (req, res, next) => {
    const token = req.headers.authorization;

    if (token) {

        jwt.verify(token, tokenSecret, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401)
    }
};

module.exports = authorizeUser;