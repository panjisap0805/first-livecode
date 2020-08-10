const bcrypt = require('bcryptjs')

function hashPassword(password){
    const salt = bcrypt.genSaltSync(5)
    const hash = bcrypt.hashSync(password, salt)

    return hash
}

function comparePassword(inputPassword, dbPassword){
    return bcrypt.compareSync(inputPassword, dbPassword)
}

module.exports = { hashPassword, comparePassword }