const jwt = require('jsonwebtoken')

const signToken = (payload) => {
    const token = jwt.sign(payload, 'rahasiadong')

    return token
}

const verifyToken = (token) => {
    const payload = jwt.verify(token, 'rahasiadong')

    return payload
}

module.exports = { signToken, verifyToken }