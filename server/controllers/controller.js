const { User } = require('../models/index')
const { comparePassword } = require('../helpers/bcrypt')
const { signToken } = require('../helpers/jwt')

class Controller {
    static async register(req, res, next){
        const objUser = {
            email: req.body.email,
            password: req.body.password
        }

        try {
            const user = await User.create(objUser)

            const createdUser = {
                id: user.id,
                email: user.email
            }
            res.status(201).json({user: createdUser})
        }
        catch(err) {
            res.status(500).json({ Error: "internal server Error"})
        }
    }

    static login(req, res, next){

    }

    static addFood(req, res){

    }

    static showFood(req, res){

    }

    static delete(req, res){

    }
}

module.exports = Controller