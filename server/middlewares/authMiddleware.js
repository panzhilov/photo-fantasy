const jwt = require('jsonwebtoken');

const { SECRET } = require('../config/env');


exports.auth = (req, res, next) => {
    const token = req.cookies['user'];

    if(token) {
        jwt.verify(token, SECRET, ((err, decodedToken) => {

            if(err) {
                res.clearCookie('user')
                res.redirect('/auth/login')
            }

            req.user = decodedToken;
            res.locals.user = decodedToken;
            next()
        }))
    } else {
        next();
    }
};
