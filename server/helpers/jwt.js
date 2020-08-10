const jwt = require('jsonwebtoken')

const signToken = (payload) => {
    const token = jwt.sign(payload, 'rahasiadong')

    return token
}

const verifyToken = (access_token) => {
    const payload = jwt.verify(access_token, 'rahasiadong')

    return payload
}

module.exports = { signToken, verifyToken }