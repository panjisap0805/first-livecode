const { User, Food } = require('../models/index')
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

    static async login(req, res, next){
        const email = req.body.email
        const inputPassword = req.body.password

        try {
            const user = await User.findOne({
                where: {
                    email
                }
            })
            const dbPassword = user.password

            if(!user){
                throw "invalid username/password"
            }
            else if(!comparePassword(inputPassword, dbPassword)){
                throw "invalid username/password"
            }
            else{
                const payload = {
                    email: user.email
                }
                const access_token = signToken(payload)

                res.status(200).json({access_token})
            }
        }
        catch {
            res.status(500).json({error: "Internal server error"})
        }
    }

    static async addFood(req, res){
        const objFood = {
            title: req.body.title,
            price: req.body.price,
            ingredients: req.body.ingredients,
            tag: req.body.tag
        }

        try {
            const newFood = await Food.create(objFood)

            res.status(201).json(objFood)
        }
        catch {
            res.status(500).json({error: "internal server error"})
        }
    }

    static showFood(req, res){
        const userId = req.userLogin.id

        try {
            const food = await Food.findAll({
                where: {
                    UserId: userId
                }
            })
            res.status(200).json(food)
        }
        catch {
            res.status(500).json({error: "internal server error"})
        }
    }

    static async delete(req, res){
        const paramId = Number(req.body.id)

        try {
            const foodData = await Food.findByPk(paramId)

            const food = await Food.destroy({
                where: {
                    id: paramId
                }
            })

            if ( result === 1 ){
                res.status(200).json(foodData)
            }
            else {
                res.status(400).json({Error : "data not found"})
            }
        }
        catch {
            res.status(500).json({error: "internal server error"})
        }
    }
}

module.exports = Controller