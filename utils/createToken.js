const jwt = require('jsonwebtoken');

const createActivationToken = (user) => {
    return jwt.sign(user, process.env.ACTIVATION_TOKEN, {
        expiresIn: '30d'
    });
};

module.exports = createActivationToken;